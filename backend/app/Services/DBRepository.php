<?php


namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Models\Student;

class DBRepository
{
    public function getStudentComplaints(Student $student)
    {
        $complaints = DB::table('student_complaints')
            ->join('complaints', 'student_complaints.complaint_id', '=', 'complaints.id')
            ->where('student_complaints.apogee', $student->apogee)
            // ->where('student_complaints.complaint_id', $request->complaint_id)
            // ->orderBy('student_complaints.created_at', 'desc')
            ->select('student_complaints.*', 'complaints.type')
            ->get();
        return ($complaints);
    }

    public function getStudentComplaintsById(Student $student, string $complaint_id)
    {
        $complaints = DB::table('student_complaints')
            ->join('complaints', 'student_complaints.complaint_id', '=', 'complaints.id')
            ->where('student_complaints.apogee', $student->apogee)
            ->where('student_complaints.complaint_id', $complaint_id)
            ->select('student_complaints.*', 'complaints.type')
            ->get();
        return ($complaints);
    }

    public function getStudentLatestComplaint(Student $student)
    {
        $complaint = DB::table('student_complaints')
            ->join('complaints', 'student_complaints.complaint_id', '=', 'complaints.id')
            ->where('student_complaints.apogee', $student->apogee)
            ->orderBy('student_complaints.created_at', 'desc')
            ->select('student_complaints.*', 'complaints.type')
            ->first();
        return $complaint;
    }
}
