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
        $student->modules()->attach([
            ['module_id' => 1],
            ['module_id' => 2],
            ['module_id' => 3],
            ['module_id' => 4],
            ['module_id' => 5],
            ['module_id' => 6],
            ['module_id' => 7],
            ['module_id' => 8],
            ['module_id' => 9],
            ['module_id' => 10],
            ['module_id' => 11],
            ['module_id' => 12],
            ['module_id' => 13],
            ['module_id' => 14],
        ]);
    }

    public function modules(Student $student)
    {
        $module = $student->modules;
        $module  = ModuleResource::collection($module);
        return ($this->DATA('modules', $module));
    }

    public function result(Student $student)
    {
        $result = Result::where('apogee', $student->apogee)->get();
        $results = ResultResource::collection($result);
        return ($this->DATA('results', $results));
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


    // store on public (not very secure ) impl something later like s3
    public function save(StoreStudentRequest $request): JsonResponse
    {
        // return "TODO";

        $baccalaureat = $request->file('baccalaureat')->store('public');
        $releve_note = $request->file('releve_note')->store('public');
        $image_presonnal = $request->file('image_presonnal')->store('public');
        $identify_recto_versto = $request->file('identify_recto_verso')->store('public');
        $request->merge([
            'baccalaureat' => $baccalaureat,
            'releve_note' => $releve_note,
            'image_presonnal' => $image_presonnal,
            'identify_recto_versto' => $identify_recto_versto,
            'inscription_date' => $this->getAcademicYear(date('Y-m-d'))
        ]);

        $student = Student::create($request->all());
        $this->setDefaultModules($student);
        event(new Registered($student));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student created successfully',
                'data' => $student
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
