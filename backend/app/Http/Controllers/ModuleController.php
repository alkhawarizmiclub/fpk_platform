<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreModuleRequest;
use App\Http\Requests\UpdateModuleRequest;
use App\Models\Module;
use App\Models\Prof;
use App\Http\Resources\ModuleResource;
use App\Services\ProfService;
use Illuminate\Http\Response;
use App\Services\ModuleService;
use App\Services\Template;

// TODO : add auth so only admin can access this controller
class ModuleController extends Controller
{
    private ModuleService $moduleService;
    private ProfService $profService;
    public function __construct(ModuleService $moduleService, ProfService $profService)
    {
        $this->moduleService = $moduleService;
        $this->profService = $profService;
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
            return (Template::NOT_FOUND('Module'));

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
