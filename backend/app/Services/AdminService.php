<?php

use App\Traits\JsonTemplate;
use App\Models\Admin;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\AdminAuth\LoginRequest;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AdminService
{
    use JsonTemplate;

    public function generateReleveNote()
    {
        Student::chunk(100, function ($students) {
            foreach ($students as $student) {

            }
        });
    }
    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $admin = Admin::where('email', $request->email)->first();
        $admin->tokens()->delete();
        $token = $admin->createToken('api_token', ['role:admin'], Carbon::now()->addHours((int)env('A_TOKEN_EXPIRATION', 2)));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'logged in successfully',
                'admin' => $admin,
                'token' => $token->plainTextToken,
            ]
        );
    }
    public function logout(Request $request): JsonResponse
    {
        Auth::guard('admin')->logout();
        $request->user()->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'logged out successfully'
        ]);
    }
}
