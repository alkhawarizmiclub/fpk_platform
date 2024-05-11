<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use App\Http\Resources\StudentResource;
use App\Services\StudentService;

class StudentController extends Controller
{
    protected StudentService $studentService ;
    public function __construct(StudentService $studentService)
    {
        $this->studentService = $studentService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = StudentResource::collection(Student::all());
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Students retrieved successfully',
                'data' => $students
            ],
            200
        ));
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
    public function store(StoreStudentRequest $request)
    {
        $student = Student::create($request->all());
        $this->studentService->setDefaultModules($student);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student created successfully',
                'data' => new StudentResource($student)
            ],
            201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
