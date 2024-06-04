<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Admin;

use App\Http\Requests\AdminAuth\LoginRequest;


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
     * Store a newly created resource in storage.
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $admin = Admin::where('email', $request->email)->first();
        $admin->tokens()->delete();
        $token = $admin->createToken('api_token', ['role:admin'], Carbon::now()->addHours(2));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'logged in successfully',
                'admin' => $admin,
                'token' => $token->plainTextToken,
            ]
        );
    }

    /**
     * Destroy an authenticated session.
     */
    public function logout(Request $request): JsonResponse
    {
        Auth::guard('admin')->logout();
        $request->user()->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'logged out successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
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
