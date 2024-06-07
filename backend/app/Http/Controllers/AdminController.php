<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

use App\Services\AdminService;

use App\Http\Requests\AdminAuth\LoginRequest;


class AdminController extends Controller
{
    private AdminService $adminService;
    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }


    public function login(LoginRequest $request): JsonResponse
    {
        return $this->adminService->login($request);
    }

    /**
     * Destroy an authenticated session.
     */
    public function logout(Request $request): JsonResponse
    {
        return $this->adminService->logout($request);
    }
    public function genreateFinalResult()
    {
        return $this->adminService->genreateFinalResult();
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
