<?php


namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Prof;
use Illuminate\Support\Facades\Storage;

use function Laravel\Prompts\table;

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
            ->join('result as ms', 'ms.apogee', '=', 's.apogee')
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
            ->join('result as ms', function ($join) use ($moduleId, $fname) {
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
            ->join('result as ms', function ($join) use ($moduleId, $lname) {
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
                ->join('result as ms', function ($join) use ($moduleId, $lname, $fname) {
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
            ->join('result as ms', function ($join) use ($moduleId, $apogee) {
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
        foreach ($student as $stud) {
            $stud->student_photo = url(Storage::url($stud->student_photo));
        }
        return ($student);
    }

    public function getStudentResult(string $apogee)
    {
        $students = DB::table('students as s')
            ->join('result as ms', 'ms.apogee', '=', 's.apogee')
            ->join('modules as m', 'ms.module_id', '=', 'm.id')
            ->select(
                's.apogee',
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
        if (!$filiere_id) {
            $schedules = DB::table('filiere_schedules')
                ->get();
            foreach ($schedules as $sch) {
                $sch->time_schedule = url(Storage::url($sch->time_schedule));
                $sch->exam_schedule = url(Storage::url($sch->exam_schedule));
            }
            return ($schedules);
        }

        $schedule = DB::table('filiere_schedules')
            ->where('filiere_id', $filiere_id)
            ->first();
        $schedule->time_schedule = url(Storage::url($schedule->time_schedule));
        $schedule->exam_schedule = url(Storage::url($schedule->exam_schedule));

        return ($schedule);
    }

    public function getProfSchedule(Prof $prof)
    {
        $schedule = DB::table('prof_schedules')
            ->where('prof_id', $prof->id)
            ->first();
        $schedule->time_schedule = url(Storage::url($schedule->time_schedule));
        $schedule->exam_schedule = url(Storage::url($schedule->exam_schedule));
        return ($schedule);
    }

    public function getProfAnnouncements(Prof $prof)
    {
        $announcements = DB::table('announcements as a')
            ->join('profs as f', 'f.id', '=', 'a.author_id')
            ->where('author_id', $prof->id)
            ->select(
                'f.firstname',
                'f.lastname',
                'a.thumbnail_path',
                'a.title',
                'a.content',
                'a.tags',
                'a.poster_image_path',
                'a.created_at'
            )
            ->get();

        foreach ($announcements as $announce) {
            $announce->thumbnail_path = url(Storage::url($announce->thumbnail_path));
            $announce->poster_image_path = url(Storage::url($announce->poster_image_path));
        }
        return ($announcements);
    }

    // get default module for filieres
    public function getFiliereDefaultModule(string $id)
    {
        $mapping = DB::table('module_init as mi')
            ->select('mi.module_id', 'm.semester')
            ->join('modules as m', 'm.id', '=', 'mi.module_id')
            ->where('mi.filiere_id', $id)
            ->get();
        return ($mapping);
    }
    public function getStudentModules($student)
    {
        $modules = DB::table('result as sm')
            ->join('modules as m', 'sm.module_id', '=', 'm.id')
            ->join('filieres as f', 'f.id', '=', 'm.filiere_id')
            ->where('sm.apogee', $student->apogee)
            ->select('m.module_name', 'f.filiere_name', 'sm.semester', 'sm.inscrit_number', 'sm.inscrit_year')
            ->get();
        return ($modules);
    }
    public function getStudentCount(string $module_id)
    {
        $count = DB::table('modules')
            ->where('module_id', $module_id)
            ->count();
        return $count;
    }
    public function getProfClasses(Prof $prof)
    {
        $classes = DB::table('result as r')
            ->join('modules as m', 'm.id','=', 'r.module_id')
            ->join('filieres as f', 'f.id', '=', 'm.filiere_id')
            ->select('m.module_name', 'f.filiere_name', DB::raw('count(r.apogee) as student_count'))
            ->where('m.prof_id', $prof->id)
            ->groupBy('m.id')
            ->get();
        return ($classes);
    }
}
