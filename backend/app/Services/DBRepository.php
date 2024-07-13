<?php


namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Prof;
use Illuminate\Support\Facades\Storage;

class DBRepository
{
    public function getStudentComplaints(Student $student)
    {
        $complaints = DB::table('student_complaints')
            ->join('complaints', 'student_complaints.complaint_id', '=', 'complaints.id')
            ->where('student_complaints.apogee', $student->apogee)
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
            ->select(
                's.student_photo',
                's.apogee',
                's.firstname',
                's.lastname',
                'ms.module_id',
                'ms.normale',
                'ms.ratt',
                'ms.inscrit_number',
                'ms.semester'
            )
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
            ->select(
                's.student_photo',
                's.apogee',
                's.firstname',
                's.lastname',
                'ms.module_id',
                'ms.normale',
                'ms.ratt',
                'ms.inscrit_number',
                'ms.semester'
            )
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
            ->select(
                's.student_photo',
                's.apogee',
                's.firstname',
                's.lastname',
                'ms.module_id',
                'ms.normale',
                'ms.ratt',
                'ms.inscrit_number',
                'ms.semester'
            )
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
                ->select(
                    's.student_photo',
                    's.apogee',
                    's.firstname',
                    's.lastname',
                    'ms.module_id',
                    'ms.normale',
                    'ms.ratt',
                    'ms.inscrit_number',
                    'ms.semester'
                )
                ->get());
        } else if (!$fname)
            return ($this->findByFirstName($moduleId, $lname));
        else if (!$lname)
            return ($this->findByLastName($moduleId, $fname));
        return ([]);
    }
    public function getByApogee(string $moduleId, string $apogee)
    {
        $student = DB::table('students as s')
            ->join('module_student as ms', function ($join) use ($moduleId, $apogee) {
                $join->on('ms.apogee', '=', 's.apogee')
                    ->where('ms.module_id', '=', $moduleId)
                    ->where('ms.apogee', '=', $apogee);
            })
            ->select(
                's.student_photo',
                's.apogee',
                's.firstname',
                's.lastname',
                'ms.module_id',
                'ms.normale',
                'ms.ratt',
                'ms.inscrit_number',
                'ms.semester'
            )
            ->get();
        return ($student);
    }

    public function getStudentResult(string $apogee)
    {
        $students = DB::table('students as s')
            ->join('module_student as ms', 'ms.apogee', '=', 's.apogee')
            ->join('modules as m', 'ms.module_id', '=', 'm.id')
            ->select(
                's.apogee',
                's.firstname',
                's.lastname',
                'ms.module_id',
                'm.module_name',
                'ms.normale',
                'ms.ratt',
                'ms.inscrit_number',
                'm.semester',
                'ms.inscrit_year'
            )
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

    public function getStudentProfile(string $apogee)
    {
        $student = DB::table('students as s')
            ->join('filieres as f', 's.filiere_id', '=', 'f.id')
            ->where('apogee', $apogee)
            ->select(
                's.apogee',
                's.firstname',
                's.lastname',
                's.firstname_ar',
                's.lastname_ar',
                's.email',
                's.phone_number',
                's.emergency_phone',
                'f.filiere_name',
                's.filiere_id',
            )
            ->first();
        $student->role = 'student';
        return ($student);
    }



    public function getProfProfile(Prof $prof)
    {
        $prof = DB::table('profs as p')
            ->where('p.id', $prof->id)
            ->select(
                'p.id',
                'p.firstname',
                'p.lastname',
                'p.email',
                'p.phone_number',
                'p.emergency_phone',
                'p.gender',
                'p.birth_date',
            )
            ->first();
        $prof->role = 'teacher';
        return ($prof);
    }

    public function getFiliereSchedules(?string $filiere_id)
    {
        if (!$filiere_id)
        {
            $schedules = DB::table('filiere_schedules')
                ->get();
            foreach ($schedules as $sch)
            {
                $sch->time_schedule = Storage::url($sch->time_schedule);
                $sch->exam_schedule = Storage::url($sch->exam_schedule);
            }
            return ($schedules);
        }

        $schedule = DB::table('filiere_schedules')
            ->where('filiere_id', $filiere_id)
            ->first();
        $schedule->time_schedule = Storage::url($schedule->time_schedule);
        $schedule->exam_schedule = Storage::url($schedule->exam_schedule);

        return ($schedule);
    }

    public function getProfSchedule(Prof $prof)
    {
        $schedule = DB::table('prof_schedules')
            ->where('prof_id', $prof->id)
            ->first();
        $schedule->time_schedule = url(Storage::url($schedule->time_schedule));
        return ($schedule);
    }
}
