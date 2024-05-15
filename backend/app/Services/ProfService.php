<?php

namespace App\Services;

use App\Http\Requests\StoreProfRequest;
use App\Models\Prof;
use App\Models\Module;
use App\Http\Resources\ProfResource;
use App\Http\Resources\StudentResource;

class ProfService
{
    public function __construct()
    {
    }

    public function getModules(string $id)
    {
        $prof = Prof::find($id)->modules;
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
        $prof  = ProfResource::collection($prof);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'prof retrieved successfully',
                'data' => $prof
            ],
            200
        );
    }

    public function getListInscriptions(string $profId, string $moduleId)
    {
        $module = Module::where('prof_id', $profId,)->where('id', $moduleId)->exists();
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
    // public function addNote()
}
