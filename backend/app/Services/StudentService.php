<?php

namespace App\Services;

use App\Http\Resources\ModuleResource;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use App\http\Requests\StoreStudentRequest;
use App\Models\Result;
use App\Http\Resources\ResultResource;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StudentAuth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class StudentService
{

    // add module to new student
    // after that it will base on modules next table to determine student modules
    private function setDefaultModules($student)
    {
        $student->modules()->attach([1, 2, 3, 3, 4, 5, 6, 7]);
    }

    public function getModules(string $id)
    {
        $module = Student::find($id)->modules;
        if (!$module) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'student not  not found',
                    'data' => null
                ],
                404
            );
        };
        $module  = ModuleResource::collection($module);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'student retrieved successfully',
                'data' => $module
            ],
            200
        );
    }

    public function findById(string $id)
    {
        $student = Student::find($id);
        if (!$student)
        	return (Template::NOT_FOUND('student'));

        $student  = new StudentResource($student);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'student retrieved successfully',
                'data' => $student
            ],
            200
        );
    }
    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $student = Student::where('email', $request->email)->first();
        $student->tokens()->delete();
        $token = $student->createToken('api_token', ['role:student']);
        return response()->json([
            'status' => 'success',
            'message' => 'Student logged in successfully',
            'data' => $student,
            'token' => $token->plainTextToken
        ]);
    }

    public function logout(Request $request): Response
    {
        Auth::guard('student')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }

    public function save(StoreStudentRequest $request) :JsonResponse
    {

        $student = Student::create($request->all());
        $this->setDefaultModules($student);
        event(new Registered($student));
        Auth::login($student);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student created successfully',
                'data' => new StudentResource($student)
            ],
            201
        );
    }

    public function result(string $id)
    {
        $module = Result::where('apogee', $id)->get();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'module retrieved successfully',
                'data' => ResultResource::collection($module)
            ],
            200
        );
    }
}
