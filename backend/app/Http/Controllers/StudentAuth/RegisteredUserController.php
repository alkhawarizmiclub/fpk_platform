<?php

namespace App\Http\Controllers\StudentAuth;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentRequest;
use App\Models\Student;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(StoreStudentRequest $request): JsonResponse
    {

        $student = Student::create($request->all());
        event(new Registered($student));

        Auth::login($student);

        return response()->json([
            'status' => 'success',
            'message' => 'student registered successfully',
            'data' => $student
        ]);
    }
}
