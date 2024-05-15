<?php

namespace App\Http\Controllers\StudentAuth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StudentAuth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use App\Models\Student;

class AuthenticatedSessionController extends Controller
{
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $student = Student::where('email', $request->email)->first();
        $student->tokens()->delete();
        $token = $student->createToken('api_token');
        return response()->json([
            'status' => 'success',
            'message' => 'Student logged in successfully',
            'data' => $student,
            'token' => $token->plainTextToken
        ]);
    }
    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('student')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
