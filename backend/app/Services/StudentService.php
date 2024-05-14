<?php

namespace App\Services;

use App\Http\Resources\ModuleResource;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use App\http\Requests\StoreStudentRequest;
use App\Models\Result;

class StudentService
{
    public function __construct()
    {
        //
    }

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
        if (!$student) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Student not found',
                    'data' => null
                ],
                404
            );
        };
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

    public function save(StoreStudentRequest $request)
    {
        $student = Student::create($request->all());
        $this->setDefaultModules($student);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student created successfully',
                'data' => new StudentResource($student)
            ],
            201
        );
    }
    public function getNote(string $id)
    {
        $module = Result::where('apogee', $id)->get();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'module retrieved successfully',
                'data' => $module
            ],
            200
        );
    }
}
