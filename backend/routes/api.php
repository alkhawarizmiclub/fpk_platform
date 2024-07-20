<?php


use App\Http\Controllers\AdminController;
use App\Http\Controllers\ComplaintsController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProfController;
use App\Http\Controllers\FpkController;
use App\Http\Controllers\ModuleController;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;


Route::group(['prefix' => 'prof', 'middleware' => ['auth:sanctum', 'EnsureAuthorized:prof']], function () {

    Route::get('/', [ProfController::class, 'show']);
    Route::get('/modules', [ProfController::class, 'modules']);
    Route::get('/classes', [ProfController::class, 'classes']);
    Route::get('/classes/{id}', [ProfController::class, 'studentLists']);
    Route::get('/modules/{id}', [ProfController::class, 'students']);
    Route::get('/logout', [ProfController::class, 'logout']);
    Route::post('/announce', [ProfController::class, 'announce']);
    Route::get('/announce', [ProfController::class, 'getAnnounce']);
    Route::delete('/announce/{id}', [ProfController::class, 'deleteAnnounce']);
    Route::get('/schedule', [ProfController::class, 'schedule']);
    Route::get('/accounts', [ProfController::class, 'accounts']);
    Route::post('/add-result', [ProfController::class, 'result']);


});

Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum', 'EnsureAuthorized:admin']], function () {

    Route::get('/logout', [AdminController::class, 'logout']);
    Route::post('/add-module', [ModuleController::class, 'store']);
    Route::post('/modules', [ModuleController::class, 'index']);
    Route::get('/gn-note', [AdminController::class, 'genreateFinalResult']);
    Route::post('/add-prof', [ProfController::class, 'store']);

   Route::post('/complaint', [ComplaintsController::class, 'store']);
    Route::delete('/complaint/{id}', [ComplaintsController::class, 'destroy']); // delete
    Route::put('/complaint/{id}', [ComplaintsController::class, 'update']); // update
});

Route::group(['prefix' => 'student', 'middleware' => ['auth:sanctum', 'EnsureAuthorized:student']], function () {
    Route::get('/', [StudentController::class, 'show']);
    Route::get('/result', [StudentController::class, 'result']);
    Route::get('/modules', [StudentController::class, 'modules']);
    Route::get('/final-result', [StudentController::class, 'finalResult']);
    Route::get('/logout', [StudentController::class, 'logout']);

    Route::post('/complaint', [StudentController::class, 'complaints']);
    Route::get('/complaint', [StudentController::class, 'getComplaints']);
    Route::delete('/complaint/{id}', [StudentController::class, 'deleteComplaint']);
    Route::get('/accounts', [StudentController::class, 'accounts']);

});



Route::post('/student/register', [StudentController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::post('/student/login', [StudentController::class, 'login'])
    ->middleware('guest')
    ->name('login');

Route::post('/admin/login', [AdminController::class, 'login'])
    ->middleware('guest')
    ->name('login');



Route::post('/prof/login', [ProfController::class, 'login'])
    ->middleware('guest')
    ->name('login');

Route::group(['prefix' => 'public', 'guest'], function () {
    Route::get('/complaint', [ComplaintsController::class, 'index']);

    Route::get('/announce', [FpkController::class, 'announce']);
    Route::get('/announce/{id}', [FpkController::class, 'getAnnounce']);
    Route::get('/filieres', [FpkController::class, 'filiere']);
    Route::get('/filieres/schedule', [FpkController::class, 'schedule']);
    Route::get('/acadmic-year', [FpkController::class, 'acadmicYear']);

});
