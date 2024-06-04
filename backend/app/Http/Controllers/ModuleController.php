<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreModuleRequest;
use App\Http\Requests\UpdateModuleRequest;
use App\Models\Module;
use App\Http\Resources\ModuleResource;
use Illuminate\Http\Response;
use App\Services\ModuleService;

class ModuleController extends Controller
{
    private ModuleService $moduleService;
    public function __construct(ModuleService $moduleService)
    {
        $this->moduleService = $moduleService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return (ModuleResource::collection(Module::all()));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreModuleRequest $request)
    {
        return ($this->moduleService->save($request));
    }

    public function show(string $moduleId)
    {
        $module = Module::find($moduleId);
        if (!$module)
            return ($this->moduleService->NOT_FOUND('module'));

        return (response()->json(
            [
                'status' => 'success',
                'message' => 'module retrieved successfully',
                'data' => new ModuleResource($module),
            ],
            Response::HTTP_OK
        ));
    }

    public function update(UpdateModuleRequest $request, Module $module)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Module $module)
    {
        //
    }
}
