<?php


namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Models\Student;
use Ramsey\Uuid\Type\Integer;

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

    public function getModuleStudent(string $moduleId)
    {
        $students = DB::table('students as s')
            ->join('module_student as ms', 'ms.apogee', '=', 's.apogee')
            ->select('s.image_presonnal','s.apogee', 's.firstname', 's.lastname', 'ms.module_id', 'ms.normale', 'ms.ratt', 'ms.inscrit_number', 'ms.semester')
            ->where('ms.module_id', $moduleId)
            ->get();
        return ($students);
    }
    public function findByFirstName(string $moduleId, string $fname)
    {
        $student = DB::table('students as s')
            ->join('module_student as ms', function ($join) use ($moduleId, $fname) {
                $join->on('ms.apogee', '=', 's.apogee')
                    ->where('ms.module_id', '=', $moduleId)
                    ->where('s.firstname', 'like', $fname . '%');
            })
            ->select('s.image_presonnal','s.apogee', 's.firstname', 's.lastname', 'ms.module_id', 'ms.normale', 'ms.ratt', 'ms.inscrit_number', 'ms.semester')
            ->get();
        return ($student);
    }

    public function findByLastName(string $moduleId, string $lname)
    {
        $student = DB::table('students as s')
            ->join('module_student as ms', function ($join) use ($moduleId, $lname) {
                $join->on('ms.apogee', '=', 's.apogee')
                    ->where('ms.module_id', '=', $moduleId)
                    ->where('s.lastname', 'like', $lname . '%');
            })
            ->select('s.image_presonnal','s.apogee', 's.firstname', 's.lastname', 'ms.module_id', 'ms.normale', 'ms.ratt', 'ms.inscrit_number', 'ms.semester')
            ->get();
        return ($student);
    }
    public function searchByNames(string $moduleId, ?string $fname, ?string $lname)
    {
        if ($lname && $fname) {
            return (DB::table('students as s')
                ->join('module_student as ms', function ($join) use ($moduleId, $lname, $fname) {
                    $join->on('ms.apogee', '=', 's.apogee')
                        ->where('ms.module_id', '=', $moduleId)
                        ->where('s.lastname', 'like', $lname . '%')
                        ->where('s.firstname', 'like', $fname . '%');
                })
                ->select('s.image_presonnal','s.apogee', 's.firstname', 's.lastname', 'ms.module_id', 'ms.normale', 'ms.ratt', 'ms.inscrit_number', 'ms.semester')
                ->get());
        }
        else if (!$fname)
            return ($this->findByFirstName($moduleId, $lname));
        else if (!$lname)
            return ($this->findByLastName($moduleId, $fname));
        // you should never reach this point but just in case
        return ([]);
    }
    // TODO : get image from public storage
    public function getByApogee(string $moduleId, string $apogee)
    {
        $student = DB::table('students as s')
            ->join('module_student as ms', function ($join) use ($moduleId, $apogee) {
                $join->on('ms.apogee', '=', 's.apogee')
                    ->where('ms.module_id', '=', $moduleId)
                    ->where('ms.apogee', '=', $apogee);
            })
                ->select('s.image_presonnal','s.apogee', 's.firstname', 's.lastname', 'ms.module_id', 'ms.normale', 'ms.ratt', 'ms.inscrit_number', 'ms.semester')
            ->get();
        return ($student);
    }

    public function getStudentResult(string $apogee)
    {
        $students = DB::table('students as s')
            ->join('module_student as ms', 'ms.apogee', '=', 's.apogee')
            ->join('modules as m', 'ms.module_id', '=', 'm.id')
            ->select('s.apogee', 's.firstname', 's.lastname', 'ms.module_id', 'm.module_name', 'ms.normale', 'ms.ratt', 'ms.inscrit_number', 'm.semester', 'ms.inscrit_year')
            ->where('s.apogee', $apogee)
            ->get();
        return ($students);
    }

    public function getStudentAccounts(string $apogee)
    {
        $accounts = DB::table('accounts')
        ->where('apogee', $apogee)
        ->get();
        return ($accounts);
    }
}
