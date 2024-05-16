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
use App\Services\Template;
use Carbon\Carbon;

class ProfService
{
    public function all()
    {
        $profs = ProfResource::collection(Prof::all());
        return (Template::DATA('profs', $profs));
    }

    public function modules(string $id)
    {
        $modules = Prof::find($id)->modules;
        if (!$modules)
            return (Template::NOT_FOUND('prof'));
        $modules  = ModuleResource::collection($modules);
        return (Template::DATA('modules', $modules));
    }

    public function listStudents(string $moduleId)
    {
        $profId = request()->user()->id;
        $module = Module::where('prof_id', $profId)->where('id', $moduleId)->exists();
        if (!$module)
            return (Template::resourceNotFound());;
        $student  = StudentResource::collection(Module::find($moduleId)->students);
        return (Template::DATA('profs', $student));
    }

    public function findById(string $id)
    {
        $prof = Prof::find($id);
        if (!$prof)
            return (Template::NOT_FOUND('prof'));
        $prof  = new ProfResource($prof);
        return (Template::DATA('prof', $prof));
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
                'prof' => $prof
            ]
        );
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $prof = Prof::where('email', $request->email)->first();
        $prof->tokens()->delete();
        $token = $prof->createToken('api_token', ['role:prof'], Carbon::now()->addHours());
        return response()->json(
            [
                'status' => 'success',
                'prof' => $prof,
                'token' => $token->plainTextToken
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
        $modules = Prof::find($profId)->modules()->where('id', $request->module_id)->exists();
        if (!$modules)
            return (Template::resourceNotFound());
        $moduleId = $request->module_id;
        $apogee = $request->apogee;
        $student = Result::where('module_id', $moduleId)->where('apogee', $apogee);
        $normal = $request->normal;
        $ratt = $request->ratt;
        $state = $student->update([
            'normal' => $normal,
            'ratt' => $ratt
        ]);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Result added successfully',
            ],
            202
        );
    }
}
