<?php

use App\Http\Resources\ModuleResource;
use App\Http\Requests\StoreModuleRequest;
use App\Models\Module;
use Illuminate\Http\Response;

class ModuleService
{

    public function findById(string $id)
    {
        $module = Module::find($id);
        if (!$module) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'module not found',
                    'data' => null
                ],
                Response::HTTP_NOT_FOUND
            );
        };
        $module  = new ModuleResource($module);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Module retrieved successfully',
                'data' => $module
            ],
            Response::HTTP_OK
        );
    }
    public function save(StoreModuleRequest $request)
    {
        $module = Module::create($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Module created successfully',
                'data' => new ModuleResource($module)
            ],
            Response::HTTP_CREATED
        );
    }
}
