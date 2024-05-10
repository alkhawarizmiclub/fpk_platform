<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfRequest;
use App\Http\Requests\UpdateProfRequest;
use App\Http\Resources\ProfResource;
use App\Models\Module;
use App\Models\Prof;
use Illuminate\Database\QueryException;
use App\Http\Resources\ModuleResource;
use App\Http\Resources\StudentResource;

class ProfController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prof = ProfResource::collection(Prof::all());
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Profs retrieved successfully',
                'data' => $prof
            ],
            200
        ));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfRequest $request)
    {
        try {
            Prof::create($request->all());
        } catch (QueryException $_) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'server error',
                ],
                500
            );
        }
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Prof created successfully',
                'data' => $request->all()
            ],
            201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
    public function getModules(string $id)
    {
        $prof = Prof::find($id)->load('modules');
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
    public function getListInscriptions(string $profId, string $moduleId)
    {
        $module = Module::where('prof_id', $profId,)->where('id', $moduleId)->exists();
        if (!$module ){
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

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prof $prof)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfRequest $request, Prof $prof)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prof $prof)
    {
        //
    }
}
