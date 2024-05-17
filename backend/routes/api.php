<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProfController;
use App\Http\Middleware\VerifyProf;
use App\Http\Middleware\VerifyStudent;
use App\Http\Controllers\FpkController;

Route::group(['prefix' => 'prof', 'middleware' => ['auth:sanctum', VerifyProf::class]], function () {
    Route::get('/', [ProfController::class, 'show']);
    Route::get('/modules', [ProfController::class, 'modules']);
    Route::get('/logout', [ProfController::class, 'logout']);
    Route::post('/announce', [ProfController::class, 'announce']);
});


Route::group(['prefix' => 'student', 'middleware' => ['auth:sanctum', VerifyStudent::class]], function () {
    Route::get('/', [StudentController::class, 'show']);
    Route::get('/result', [StudentController::class, 'result']);
    Route::get('modules', [StudentController::class, 'modules']);
    Route::get('/logout', [ProfController::class, 'logout']);
});



Route::post('/student/register', [StudentController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::post('/student/login', [StudentController::class, 'login'])
    ->middleware('guest')
    ->name('login');


Route::post('/prof/register', [ProfController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::post('/prof/login', [ProfController::class, 'login'])
    ->middleware('guest')
    ->name('login');

// get all with pagination
Route::group(['prefix' => 'public', ], function () {
    // Route::get('/announce', [FpkController::class, 'index']);
    Route::get('/announce', [FpkController::class, 'announce']);
});

// Route::get('announce', function () {
//     $announcements = \App\Models\Announcement::where('is_accepted', false)->paginate();
//     foreach ($announcements as $announcement) {
//         $announcement->author;
//     }
//     return response()->json($announcements);
// });
