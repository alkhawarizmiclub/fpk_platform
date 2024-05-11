<?php

namespace App\Services;

class StudentService
{
    public function __construct()
    {
        //
    }
    public function setDefaultModules($student)
    {
        $student->modules()->attach([1, 2, 3]);
    }
}
