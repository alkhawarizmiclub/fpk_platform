<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\StudentAuth\LoginRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use App\Http\Resources\StudentResource;
use App\Services\StudentService;
use Illuminate\Http\Request;

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
        $apogee = request()->user()->apogee;
        return ($this->studentService->modules($apogee));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return ($request->user());
    }

    public function result()
    {
        $apogee = request()->user()->apogee;
        return ($this->studentService->result($apogee));
    }
}
