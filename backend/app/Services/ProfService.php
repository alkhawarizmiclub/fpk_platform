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
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Services\Template;

class ProfService
{
    public function all()
    {
        return response()->json(
            [
                'status' => 'success',
                'message' => 'profs retrieved successfully',
                'data' => ProfResource::collection(Prof::all())
            ],
            200
        );
    }

    public function modules(string $id)
    {
        $modules = Prof::find($id)->modules;
        if (!$modules) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'prof not found',
                    'data' => null
                ],
                404
            );
        };
        $modules  = ModuleResource::collection($modules);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'modules retrieved successfully',
                'data' => $modules
            ],
            200
        );
    }

    public function getListInscriptions(string $profId, string $moduleId)
    {
        $module = Module::where('prof_id', $profId)->where('id', $moduleId)->exists();
        if (!$module) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Resource not Available',
                    'data' => null
                ],
                404
            );
        };
        $module  = StudentResource::collection(Module::find($moduleId)->students);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'module retrieved successfully',
                'data' => $module
            ],
            200
        );
    }

    public function findById(string $id)
    {
        $prof = Prof::find($id);
        if (!$prof) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'prof not found',
                    'data' => null
                ],
                404
            );
        };
        $prof  = new ProfResource($prof);

        return response()->json(
            [
                'status' => 'success',
                'message' => 'prof retrieved successfully',
                'data' => $prof
            ],
            200
        );
    }
    public function save(StoreProfRequest $request)
    {
        $prof = Prof::create($request->all());
        event(new Registered($prof));

        Auth::login($prof);

        return response()->json([
            'status' => 'success',
            'message' => 'Prof registered successfully',
            'prof' => $prof
        ]);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $prof = Prof::where('email', $request->email)->first();
        $prof->tokens()->delete();
        $token = $prof->createToken('api_token', ['role:prof']);
        return response()->json([
            'status' => 'success',
            'prof' => $prof,
            'token' => $token->plainTextToken
        ]);
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
    public function addResult(string $profId, UpdateResultRequest $request)
    {
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
