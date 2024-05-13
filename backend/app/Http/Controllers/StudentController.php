<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use App\Http\Resources\StudentResource;
use App\Services\StudentService;

class StudentController extends Controller
{
    protected StudentService $studentService;

    public function __construct(StudentService $studentService)
    {
        $this->studentService = $studentService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Students retrieved successfully',
                'data' => StudentResource::collection(Student::all())
            ],
            200
        ));
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        return ($this->studentService->save($request));
    }
    public function modules(string $id)
    {
        return ($this->studentService->getModules($id));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return ($this->studentService->findById($id));
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
