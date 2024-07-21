<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\StudentAuth\LoginRequest;
use App\Http\Resources\StudentResource;
use App\Services\StudentService;
use Illuminate\Http\Request;
use App\Http\Requests\StoreComplaintsRequest;
use App\Http\Requests\StoreStudentComplaintRequest;
use Barryvdh\DomPDF\Facade\Pdf;
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
    public function logout(Request $request)
    {
        return ($this->studentService->logout($request));
    }

    public function modules()
    {
        $student  = request()->user();
        return ($this->studentService->modules($student));
    }

    public function accounts()
    {
        $student = request()->user();
        return ($this->studentService->accounts($student));
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
    public function show()
    {
        $student = request()->user();
        return ($this->studentService->profile($student));
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
    public function documents()
    {
        $type = request()->query('type');
        if (!$type)
            return (response()->noContent());
        $student = request()->user();
        $data = $this->studentService->documents($student, strtolower($type));
        if (!$data) {
            return (response()->json(
                [
                    'status' => 'error',
                    'message' => 'ce document n\'est pas disponible à votre situation actuelle',
                    'data' => null
                ],
                404
            ));
        }
        $r = DB::table('filieres')->where('id', $student->filiere_id)->first();
        $status = null;
        if ($data['note'] >= 10) {
            $status = 'Valide';
        } else {
            $status = 'Non Valide';
        }
        $pdf = Pdf::loadView(
            'releve_note',
            [
                'student' => $student,
                'data' => $data['data'],
                'note' => round($data['note'], 4),
                'status' => $status,
                'filiere' => $r->filiere_name,
                'date' => date('d/m/Y'),
                'semestre' => $type[1]
            ]
        );
        return ($pdf->download('releve-note.pdf'));
    }
}
