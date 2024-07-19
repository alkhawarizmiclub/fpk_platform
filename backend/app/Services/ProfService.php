<?php

namespace App\Services;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\ProfAuth\LoginRequest;
use App\Models\Prof;
use App\Models\Module;
use App\Http\Resources\ProfResource;
use App\Http\Resources\StudentNoteResource;
use App\Http\Resources\ModuleResource;
use App\Http\Requests\UpdateResultRequest;
use App\Models\Result;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Traits\JsonTemplate;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreannouncementRequest;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

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

    public function modules(Prof $prof)
    {
        $modules = DB::table('modules as m')
            ->join('filieres as f', 'm.filiere_id', '=', 'f.id')
            ->select('m.id', 'm.module_name', 'm.semester', 'f.filiere_abrv')
            ->where('prof_id', $prof->id)
            ->get();
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
            return ([]);
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
                'data' => new ProfResource($prof)
            ]
        );
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $prof = Prof::where('email', $request->email)->first();
        $prof->tokens()->delete();
        $token = $prof->createToken('api_token', ['role:prof']);
        return response()->json(
            [
                'status' => 'success',
                'data' => $this->dbRepository->getProfProfile($prof),
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

    public function announce(StoreAnnouncementRequest $request)
    {
        $image_path = env('ANNOUNCE_IMAGE_PATH', 'announce/image');
        $prof = request()->user();
        $thumbnail_path = $request->file('thumbnail_path')?->store($image_path, 'public');
        $poster_image_path = $request->file('poster_image_path')?->store($image_path, 'public');
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
    public function deleteAnnounce(string $id)
    {
        $prof = request()->user();
        $announce = $prof->announcements()->find($id);
        if (!$announce)
            return ($this->resourceNotFound());
        if (Storage::disk('public')->exists($announce->thumbnail_path))
            Storage::disk('public')->delete($announce->thumbnail_path);
        if (Storage::disk('public')->exists($announce->poster_image_path))
            Storage::disk('public')->delete($announce->poster_image_path);
        $announce->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Announcement deleted successfully',
            ],
            202
        );
    }
    public function schedule($prof)
    {
        return response()->json(
            [
                'status' => 'success',
                'data' => $this->dbRepository->getProfSchedule($prof)
            ]
        );
    }
    public function profile(Prof $prof)
    {
        return response()->json(
            [
                'status' => 'success',
                'data' => $this->dbRepository->getProfProfile($prof)
            ]
        );
    }
    public function getAnnonce($prof)
    {
        return response()->json(
            [
                'status' => 'success',
                'data' => $this->dbRepository->getProfAnnouncements($prof)
            ]
        );
    }
    public function classes(Prof $prof)
    {
        return response()->json(
            [
                'status' => 'success',
                'data' => $this->dbRepository->getProfClasses($prof)

            ]
        );
    }
    public function getStudentLists(string $moduleId, Prof $prof)
    {
        $module = Module::where('id', $moduleId)->where('prof_id', $prof->id)->first();
        if (!$module)
            return ($this->resourceNotFound());
        $students  = $this->dbRepository->getStudentLists($moduleId);
        $pdf = Pdf::loadView('list',
            [
                'students' => $students,
                'module_name' => $module->module_name,
                'year' => StudentService::getAcademicYear(date('Y-m-d'))
            ]
        );
        return ($pdf->download("$module->module_name.pdf"));

    }
}
