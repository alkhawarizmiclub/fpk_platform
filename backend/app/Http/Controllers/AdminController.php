<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\Admin;
use App\Models\Module;
use App\Models\Prof;
use App\Services\Template;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdminRequest $request, Admin $admin)
    {
        //
    }

    // public function assignProf(Request $request)
    // {
    //     $moduleId = $request->module_id;
    //     $profId = $request->prof_id;
    //     $module = Module::find($moduleId);
    //     if (!$module)
    //         return (Template::NOT_FOUND('Module'));
    //     if (Prof::find($profId) == null)
    //         return (Template::NOT_FOUND('Prof'));
    //     if ($module->prof_id != null)
    //         return (Template::ERROR('module already have a prof', Response::HTTP_CONFLICT));
    //     $_ = $module->update(['prof_id' => $profId]);
    //     return (response()->json([
    //         'status' => 'success',
    //         'message' => 'module has been assign',
    //         'data' => $_,
    //     ], Response::HTTP_OK));
    // }
}
