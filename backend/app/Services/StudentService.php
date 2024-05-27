<?php

namespace App\Services;

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
use Illuminate\Http\Request;
use App\Traits\JsonTemplate;
use DateTime;


class StudentService
{
    use JsonTemplate;
    public function all()
    {
        $students = StudentResource::collection(Student::all());
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
        ]);
    }

    public function modules(string $id)
    {
        $module = Student::find($id)->modules;
        if (!$module)
            return ($this->NOT_FOUND('student'));
        $module  = ModuleResource::collection($module);
        return ($this->DATA('modules', $module));
    }

    public function findById(string $id)
    {
        $student = Student::find($id);
        if (!$student)
            return ($this->NOT_FOUND('student'));

        $student  = new StudentResource($student);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'student retrieved successfully',
                'data' => $student
            ],
            200
        );
    }
    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $student = Student::where('email', $request->email)->first();
        $student->tokens()->delete();
        $token = $student->createToken($student->apogee . 'api_token', ['role:student'], Carbon::now()->addHours());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student logged in successfully',
                'data' => $student,
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

        $student = Student::create($request->all());
        $this->setDefaultModules($student);
        event(new Registered($student));
        Auth::login($student);
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Student created successfully',
                'data' => new StudentResource($student)
            ],
            201
        );
    }

    public function result($apogee)
    {
        $module = Result::where('apogee', $apogee)->get();
        $results = ResultResource::collection($module);
        return ($this->DATA('results', $results));
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
}