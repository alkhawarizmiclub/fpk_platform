<?php

use App\Traits\JsonTemplate;
use App\Models\Student;

class AdminService
{
    use JsonTemplate;
    public function generateNote()
    {
        Student::chunk(100, function ($students) {
            foreach ($students as $student) {
                $note = 0;
                foreach ($student->results as $result) {
                    $note += $result->note;
                }
                $note = $note / count($student->results);
                $student->note = $note;
                $student->save();
            }
        });
    }
}
