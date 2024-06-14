<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\StudentAuth\LoginRequest;
use App\Http\Resources\StudentResource;
use App\Services\StudentService;
use Illuminate\Http\Request;
use App\Http\Requests\StoreComplaintsRequest;
use App\Http\Requests\StoreStudentComplaintRequest;
use Illuminate\Support\Facades\DB;

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
        return ($this->studentService->all());
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        return ($this->studentService->save($request));
    }

    public function login(LoginRequest $request)
    {
        return ($this->studentService->login($request));
    }

    public function modules()
    {
        $student = request()->user();
        return ($this->studentService->modules($student));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $student = $request->user();
        return (Response()->json(
            [
                'status' => 'success',
                'message' => 'student profile retrieved successfully',
                'data' => new StudentResource($student)
            ]
        ));
    }

    public function result()
    {
        $student = request()->user();
        return ($this->studentService->result($student));
    }
    public function finalResult()
    {
        $student = request()->user();
        return ($this->studentService->finalResult($student));
    }

    public function complaints(StoreStudentComplaintRequest $request)
    {
        return ($this->studentService->complaints($request));
    }
    public function getComplaints(Request $request)
    {
        $Student = $request->user();
        return ($this->studentService->getComplaints($Student));
    }

    public function deleteComplaint(string $id)
    {
        $student = request()->user();


        DB::table('student_complaints')->where('id', $id)->where('apogee', $student->apogee)->delete();
        return ($this->studentService->getComplaints($student));
    }
}
