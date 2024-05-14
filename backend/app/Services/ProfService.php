<?php

namespace App\Services;

use App\Http\Requests\StoreProfRequest;
use App\Models\Prof;
use App\Models\Module;
use App\Http\Resources\ProfResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\ModuleResource;
use Illuminate\Http\Request;
use App\Models\Result;

class ProfService
{
    public function __construct()
    {
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
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Prof created successfully',
                'data' => $prof
            ],
            201
        );
    }
    public function addResult(string $profId, Request $request)
    {
        if (!Prof::whereId($profId)->exists())
            return (Template::NOT_FOUND('prof'));

        $moduleId = $request->module_id;
        $apogee = $request->apogee;
        $student = Result::where('module_id', $moduleId)->where('apogee', $apogee);
        // $result_normal = $request->result_normal;
        // $resutl_ratt_ratt = $request->result_ratt;
        $state = $student->update([
            'normal' => $request->normal,
            'ratt' => $request->ratt
        ]);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Result added successfully',
                'data' => $state
            ],
            201
        );
    }
    // public function addNote()
}
