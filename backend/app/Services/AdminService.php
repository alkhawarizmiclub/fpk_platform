<?php

namespace App\Services;

use App\Traits\JsonTemplate;
use App\Models\Admin;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\AdminAuth\LoginRequest;
use App\Models\FinalResult;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use App\Models\Result;

class AdminService
{
    use JsonTemplate;

    //1|yIPNx7q9m6Kws3QZ2bzrFmN2QQVaEKLFlU2HDKR51376ef23
    //2|Fmt1hZSSG8LhRG3jQFbVO3sr8wU1zxsW45g2vG0S8391bb41
    private function validateModules(Student $student)
    {
        $result = Result::where('apogee', $student->apogee)->get();
        foreach ($result as $module) {
            $note = null;
            $session = null;
                Log::info('generating final results for student ' . $module->normale);
            if ($module->normale != null) {
                $note = $module->normale;
                $session = 'normale';
            }
            if ($module->ratt != null) {
                $note = max($note ?? 0, $module->ratt);
                $session = 'ratrappage';
            } else {
                $module->normale = null;
                $module->ratt = null;
            }
            if ($note != null) {
                FinalResult::create([
                    'apogee' => $student->apogee,
                    'module_id' => $module->id,
                    'note' => $note,
                    'session' => $session,
                    'semester' => 'S1',
                    'year' => StudentService::getAcademicYear(date('Y-m-d'))
                ]);
                $module->delete();
            }
        }
    }
    public function genreateFinalResult()
    {
        Student::chunk(100, function ($students) {
            foreach ($students as $student) {
                $this->validateModules($student);
            }
        });
        return response()->json([
            'status' => 'success',
            'message' => 'final results generated successfully'
        ], 201);
    }
    public function login(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $admin = Admin::where('email', $request->email)->first();
        $admin->tokens()->delete();
        $token = $admin->createToken('api_token', ['role:admin'], Carbon::now()->addHours((int)env('A_TOKEN_EXPIRATION', 2)));
        return response()->json(
            [
                'status' => 'success',
                'message' => 'logged in successfully',
                'admin' => $admin,
                'token' => $token->plainTextToken,
            ]
        );
    }
    public function logout(Request $request): JsonResponse
    {
        Auth::guard('admin')->logout();
        $request->user()->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'logged out successfully'
        ]);
    }
}
