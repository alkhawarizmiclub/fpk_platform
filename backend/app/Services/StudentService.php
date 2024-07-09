<?php

namespace App\Services;

use App\Http\Requests\StoreComplaintsRequest;
use App\Http\Resources\StudentComplaintCollection;
use App\Http\Requests\StoreStudentComplaintRequest;
use App\Http\Resources\ModuleResource;
use App\Http\Resources\StudentResource;
use App\Models\Student;
use App\http\Requests\StoreStudentRequest;
use App\Models\Result;
use App\Http\Resources\ResultResource;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StudentAuth\LoginRequest;
use Carbon\Carbon;
use App\Http\Resources\StoreStudentComplaintResource;
use App\Http\Resources\StudentComplaintResource;
use App\Models\StudentComplaint;
use Illuminate\Http\Request;
use App\Traits\JsonTemplate;
use Illuminate\Support\Facades\DB;
use DateTime;

use App\Services\DBRepository;

class StudentService
{
    use JsonTemplate;
    private DBRepository $dbRepository;

    public function __construct(DBRepository $dbRepository)
    {
        $this->dbRepository = $dbRepository;
    }
    public function all()
    {
        $students = StudentResource::collection(Student::paginate());
        return ($this->DATA('students', $students));
    }
    // add module to new student
    // after that it will base on modules next table to determine student modules
    private function setDefaultModules($student)
    {
        // this depend on the filiere
        $modules = [
            1 => ['semester' =>  'S1'],
            2 => ['semester' =>  'S1'],
            3 => ['semester' =>  'S1'],
            4 => ['semester' =>  'S1'],
            5 => ['semester' =>  'S1'],
            6 => ['semester' =>  'S1'],
            7 => ['semester' =>  'S1'],
            8 => ['semester' =>  'S2'],
            9 => ['semester' =>  'S2'],
            10 => ['semester' => 'S2'],
            11 => ['semester' => 'S2'],
            12 => ['semester' => 'S2'],
            13 => ['semester' => 'S2'],
            14 => ['semester' => 'S2'],
        ];

        $student->modules()->attach($modules);
    }


    public function modules(Student $student)
    {
        $module = $student->modules;
        $module  = ModuleResource::collection($module);
        return ($this->DATA('modules', $module));
    }

    public function result(Student $student)
    {
        $result = $this->dbRepository->getStudentResult($student->apogee);
        return ($this->DATA('results', $result));
    }


    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $student = Student::where('email', $request->email)->first();
        $student->tokens()->delete();
        $token = $student->createToken($student->apogee . '|api_token', ['role:student'], /*Carbon::now()->addHours((int)env('S_TOKEN_EXPIRATION', 2))*/);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student logged in successfully',
                'data' => new StudentResource($student),
                'token' => $token->plainTextToken
            ]
        );
    }


    public function logout(Request $request): JsonResponse
    {
        Auth::guard('student')->logout();
        $request->user()->tokens()->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'student logged out successfully'
            ]
        );
    }


    public function save(StoreStudentRequest $request): JsonResponse
    {

        $baccalaureat = $request->file('baccalaureat')?->store('student/baccalaureat','public');
        $releve_note = $request->file('releve_note')?->store('student/releve_note', 'public');
        $image_presonnal = $request->file('studentPhoto')?->store('student/image_presonnal', 'public');
        $identify_recto_versto = $request->file('identify_recto_verso')?->store('student/identify', 'public');


        $student = Student::create(
            [
                'firstname' => $request->prenom_fr,
                'lastname' => $request->nom_fr,
                'firstname_ar' => $request->prenom_ar,
                'lastname_ar' => $request->nom_ar,
                'birth_date' => $request->date,
                'birth_place' => $request->lieu,
                'student_code' => $request->code,
                'nationality' => $request->nationality,
                'id_num' => $request->id_num,
                'email' => $request->email,
                'phone' => $request->phone,
                'emergencyPhone' => $request->emergencyPhone,
                'address' => $request->address,
                'filiere' => $request->filiere,
                'password' => bcrypt($request->password),
                'gender' => $request->gender,
                'baccalaureat' => $baccalaureat,
                'releve_note' => $releve_note,
                'image_presonnal' => $image_presonnal,
                'identify_recto_verso' => $identify_recto_versto,
            ]
        );
        $this->setDefaultModules($student);
        event(new Registered($student));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student created successfully',
                'data' => new StudentResource($student)
            ],
            201
        );
    }


    public static  function getAcademicYear($date, $academicYearStartMonth = 9)
    {
        // Create a DateTime object from the input date
        $dateTime = new DateTime($date);

        // Get the year and month from the DateTime object
        $year = (int)$dateTime->format('Y');
        $month = (int)$dateTime->format('m');
        // Determine the academic year
        if ($month >= $academicYearStartMonth) {
            $startYear = $year;
            $endYear = $year + 1;
        } else {
            $startYear = $year - 1;
            $endYear = $year;
        }
        // Return the academic year in the format "YYYY-YYYY"
        return $startYear . '-' . $endYear;
    }

    public function finalResult(Student $student)
    {
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student final result',
                'data' => $student->results->GroupBy('semester')
            ]
        );
    }

    public function complaints(StoreStudentComplaintRequest $request)
    {
        $student = request()->user();
        $student->complaints()->attach($request->complaint_id, ['description' => $request->description]);

        $complaint = $this->dbRepository->getStudentLatestComplaint($student);

        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Complaint created successfully',
                'data' => new StudentComplaintResource($complaint)

            ],
            201
        ));
    }

    public function getComplaints(Student $student)
    {
        $complaint = $this->dbRepository->getStudentComplaints($student);
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Complaint created successfully',
                'data' => StudentComplaintResource::collection($complaint)
            ],
            201
        ));
    }
}
