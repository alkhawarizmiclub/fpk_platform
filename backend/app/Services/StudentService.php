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
use Carbon\Carbon;
use Illuminate\Http\Request;


class StudentService
{
    public function all()
    {
        $students = StudentResource::collection(Student::all());
        return (Template::DATA('students', $students));
    }
    // add module to new student
    // after that it will base on modules next table to determine student modules
    private function setDefaultModules($student)
    {
        $student->modules()->attach([1, 2, 3, 3, 4, 5, 6, 7]);
    }

    public function modules(string $id)
    {
        $module = Student::find($id)->modules;
        if (!$module)
            return (Template::NOT_FOUND('student'));
        $module  = ModuleResource::collection($module);
        return (Template::DATA('modules', $module));
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
        $token = $student->createToken($student->apogee . 'api_token', ['role:student'], Carbon::now()->addHours());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student logged in successfully',
                'data' => $student,
                'token' => $token->plainTextToken
            ]
        );
    }


    public function logout(Request $request): JsonResponse
    {
        Auth::guard('student')->logout();
        $request->user()->tokens()->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'student logged out successfully'
            ]
        );
    }


    public function save(StoreStudentRequest $request): JsonResponse
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

    public function result($apogee)
    {
        $module = Result::where('apogee', $apogee)->get();
        $results = ResultResource::collection($module);
        return (Template::DATA('results', $results));
    }
}
