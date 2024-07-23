<?php

namespace App\Services;

use Faker\Generator as Faker;
use Illuminate\Support\Str;
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
use Illuminate\Support\Facades\Log;

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

    public function setDefaultModules(Student $student)
    {
        $modules = $this->dbRepository->getFiliereDefaultModule($student->filiere_id);
        foreach ($modules as $module) {
            $student->modules()->attach($module->module_id, ['semester' => $module->semester]);
        }
    }


    public function modules(Student $student)
    {
        $module = $this->dbRepository->getStudentModules($student);
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
        $token = $student->createToken($student->apogee . '|api_token', ['role:student'], Carbon::now()->addHours(2));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student logged in successfully',
                'data' => $this->dbRepository->getStudentProfile($student->apogee),
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

    // $table->id();
    // $table->unsignedBigInteger('apogee');
    // $table->string('account_id');
    // $table->string('account_type');
    // $table->string('account_url');
    // $table->string('account_password');
    static public function setAccounts(Student $student)
    {
        $identify = $student->firstname . '.' . $student->lastname . '.' . Carbon::now()->format('Y') . '@usms.ac.ma';
        DB::table('accounts')
            ->insert([
                [
                    'user_id' => $student->apogee,
                    'account_id' => strtolower($identify),
                    'account_type' => 'Microsoft 365',
                    'account_url' => 'https://www.office.com/',
                    'account_password' => Str::random(12)
                ],
                [
                    'user_id' => $student->apogee,
                    'account_id' => strtolower($identify),
                    'account_type' => 'Rosetta Stone',
                    'account_url' => 'https://login.rosettastone.com/',
                    'account_password' => Str::random(12)
                ],
                [
                    'user_id' => $student->apogee,
                    'account_id' => strtolower($identify),
                    'account_type' => 'Moodle',
                    'account_url' => 'http://moodle.usms.ac.ma/moodle/',
                    'account_password' => Str::random(12)
                ]
            ]);
    }
    public function save(StoreStudentRequest $request): JsonResponse
    {
        $baccalaureat = $request->file('baccalaureat')?->store('student/baccalaureat', 'public');
        $releve_note = $request->file('releve_note')?->store('student/releve_note', 'public');
        $student_photo = $request->file('student_photo')?->store('student/student_photo', 'public');
        $identify_recto_versto = $request->file('identify_recto_verso')?->store('student/identify', 'public');

        $student = Student::create(
            [
                ...$request->all(),
                'baccalaureat' => $baccalaureat,
                'releve_note' => $releve_note,
                'student_photo' => $student_photo,
                'identify_recto_verso' => $identify_recto_versto
            ]
        );

        $this->setDefaultModules($student);
        $this->setAccounts($student);
        event(new Registered($student));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student created successfully',
                'data' => $this->dbRepository->getStudentProfile($student->apogee)
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

    public function profile(Student $student)
    {
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Student profile',
                'data' => $this->dbRepository->getStudentProfile($student->apogee)
            ]
        ));
    }

    public function accounts(Student $student)
    {
        return (response()->json(
            [
                'status' => 'success',
                'message' => 'Student accounts',
                'data' => $this->dbRepository->getStudentAccounts($student->apogee)
            ]
        ));
    }
    public function documents(Student $student, string $type)
    {
        $datas = null;
        $is_releve = false;
        switch ($type) {
            case 's1':
            case 's2':
            case 's3':
            case 's4':
            case 's5':
            case 's6':
                $is_releve = true;
                $datas[0] = $this->dbRepository->getStudentNote($student, [$type]);
                break;
            case "l1":
                $datas[0] = $this->dbRepository->getStudentNote($student, ['s1', 's2']);
                break;
            case "l2":
                $datas[0] = $this->dbRepository->getStudentNote($student, ['s1', 's2']);
                $datas[1] = $this->dbRepository->getStudentNote($student, ['s3', 's4',]);
                break;
            case "l3":
                $datas[0] = $this->dbRepository->getStudentNote($student, ['s1', 's2']);
                $datas[1] = $this->dbRepository->getStudentNote($student, ['s3', 's4',]);
                $datas[2] = $this->dbRepository->getStudentNote($student, ['s5', 's6']);
                break;
        }
        if ($is_releve) {
            $data = $this->processData($datas[0], $type);
            if ($data == null) {
                return (null);
            }
            return ($data);
        }
        $result = new \stdClass();
        $result->note = 0;
        $result->data = [];
        $count = 0;
        foreach ($datas as $data) {
            $data = $this->processData($data, $type);
            if ($data === null) {
                return (response()->json(
                    [
                        'status' => 'error',
                        'message' => 'ce document n\'est pas disponible à votre situation actuelle',
                        'data' => null
                    ],
                    404
                ));
            }
            $result->note += $data['note'];
            $count++;
        }

        return (response()->json(
            [
                'status' => 'success',
                'message' => $datas  && $result->note >= 10 ? 'Etudiant documents' : 'ce document n\'est pas disponible à votre situation actuelle',
                'data' => $result->note >= 10 ? $result->note : null
            ],
            $datas  && $result->note >= 10 ? 200 : 404
        ));
    }
    private function processData($data, $type)
    {
        switch ($type)
        {
            case 's1':
            case 's2':
                return $this->checkValidation($data, 7);
            case 's3':
            case 's4':
            case 's5':
            case 's6':
                return $this->checkValidation($data, 6);
            case "l1":
                return $this->checkValidation($data, 14);
            case "l2":
                return $this->checkValidation($data, 12);
            case "l3":
                return $this->checkValidation($data, 12);
        }
    }
    private function checkValidation($data, int $count)
    {
        $isAjourne = false;
        $sum = 0;

        if ($data->count() !== $count) {
            return null;
        }

        foreach ($data as $d) {
            if ($d->normale === null && $d->ratt === null)
                return null;
            if ($d->normale >= 10)
                $d->status = 'V';
            else if ($d->ratt >= 10)
                $d->status = 'VAR';
            else if (max($d->normale, $d->ratt) < 5) {
                $d->status = 'AJ';
                $isAjourne = true;
            } else
                $d->status = 'NV';
            $sum += max($d->normale, $d->ratt);
            $d->note = max($d->normale, $d->ratt);
        }
        if ($isAjourne === true)
            return null;
        if ($sum / $count < 10)
            return ['data' => $data, 'note' => $sum / $count];

        foreach ($data as $d) {
            if ($d->status === 'NV')
                $d->status = 'AC';
        }
        return ['data' => $data, 'note' => $sum / $count];
    }
}
