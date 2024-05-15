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

    // TODO : move to defferant route
    public function show(string $moduleId)
    {
        $module = Module::find($moduleId);
        if (!$module)
            return (Template::NOT_FOUND('Module'));
        $profId  = request()->query('profId');
        if (!$profId)
            return ($this->moduleService->toJson($module));
        if (Prof::find($profId) == null)
            return (Template::NOT_FOUND('Prof'));
        if ($module->prof_id != null)
            return (Template::ERROR('module already have a prof', Response::HTTP_CONFLICT));
        $_ = $module->update(['prof_id' => $profId]);
        return (response()->json([
            'status' => 'success',
            'message' => 'module has been assign',
            'data' => $_,
        ], Response::HTTP_OK));
    }
    /**
     * Update the specified resource in storage.
     */
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
