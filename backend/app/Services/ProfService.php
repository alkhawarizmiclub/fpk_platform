<?php

namespace App\Services;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\ProfAuth\LoginRequest;
use App\Models\Prof;
use App\Models\Module;
use App\Http\Resources\ProfResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\ModuleResource;
use App\Http\Requests\UpdateResultRequest;
use App\Models\Result;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Traits\JsonTemplate;
use Carbon\Carbon;
use App\Http\Requests\StoreannouncementRequest;
use App\Http\Resources\StudentNoteResource;

class ProfService
{
    use JsonTemplate;
    private DBRepository $dbRepository;

    public function __construct(DBRepository $dbRepository)
    {
        $this->dbRepository = $dbRepository;
    }
    public function all()
    {
        $profs = ProfResource::collection(Prof::all());
        return ($this->DATA('profs', $profs));
    }

    public function modules(string $id)
    {
        $modules = Prof::find($id)->modules;
        if (!$modules)
            return ($this->NOT_FOUND('prof'));
        $modules  = ModuleResource::collection($modules);
        return ($this->DATA('modules', $modules));
    }

    public function students(string $moduleId)
    {
        $profId = request()->user()->id;
        $module = Module::where('id', $moduleId)->where('prof_id', $profId)->exists();
        if (!$module)
            return ($this->resourceNotFound());
        $students = $this->search($moduleId);
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Students found successfully',
                'data' => StudentNoteResource::collection($students)
            ]
        ));
    }
    public function search(string $moduleId)
    {
        $apogee = request()->query('apogee');
        $fname = request()->query('fname');
        $lname = request()->query('lname');
        if (!$apogee && !$fname && !$lname)
            return ($this->dbRepository->getModuleStudent($moduleId));
        if ($apogee)
            return ($this->dbRepository->getByApogee($moduleId, $apogee));
        return ($this->dbRepository->searchByNames($moduleId, $fname, $lname));
    }

    public function findById(string $id)
    {
        $prof = Prof::find($id);
        if (!$prof)
            return ($this->NOT_FOUND('prof'));
        $prof  = new ProfResource($prof);
        return ($this->DATA('prof', $prof));
    }

    public function save(StoreProfRequest $request)
    {
        $prof = Prof::create($request->all());
        event(new Registered($prof));

        Auth::login($prof);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Prof registered successfully',
                'data' =>new ProfResource( $prof)
            ]
        );
    }

    // TODO : add expration date
    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $prof = Prof::where('email', $request->email)->first();
        $prof->tokens()->delete();
        $token = $prof->createToken('api_token', ['role:prof']);
        return response()->json(
            [
                'status' => 'success',
                'data' => new ProfResource($prof),
                'token' => $token->plainTextToken,
            ]
        );
    }

    /**
     * Destroy an authenticated session.
     */
    public function logout(Request $request): JsonResponse
    {
        Auth::guard('prof')->logout();
        $request->user()->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Prof logged out successfully'
        ]);
    }
    // TODO : make better algo for adding result
    public function result(UpdateResultRequest $request)
    {
        $profId = request()->user()->id;
        $modules = Module::find($request->module_id)?->where('prof_id', $profId)->where('id', $request->module_id)->exists();
        if (!$modules)
            return ($this->resourceNotFound());
        $moduleId = $request->module_id;
        $apogee = $request->apogee;
        $student = Result::where('module_id', $moduleId)->where('apogee', $apogee)->first();
        if (!$student)
            return ($this->resourceNotFound());
        $normale = $request->normale;
        $ratt = $request->ratt;
        if (!$normale && !$ratt)
            return (response()->noContent());
        $notes = [];
        if ($normale)
            $notes['normale'] = $normale;
        if ($ratt)
            $notes['ratt'] = $ratt;
        $student->update($notes);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Result added successfully',
            ],
            202
        );
    }

    // if file should not visible to public it get store on local storage else is on public
    public function announce(StoreAnnouncementRequest $request)
    {
        $prof = request()->user();
        $thumbnail_path = $request->file('thumbnail_path')->store('public');
        $poster_image_path = $request->file('poster_image_path')->store('public');
        $prof->announcements()->create([
            'title' => $request->title,
            'thumbnail_path' => $thumbnail_path,
            'tags' => $request->tags,
            'content' => $request->content,
            'poster_image_path' => $poster_image_path,
        ]);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Announcement created successfully',
            ],
            201
        );
    }
}
