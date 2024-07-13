<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ComplaintsController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProfController;
use App\Http\Controllers\FpkController;
use App\Http\Controllers\ModuleController;
use Illuminate\Support\Facades\Storage;

Route::group(['prefix' => 'prof', 'middleware' => ['auth:sanctum', 'EnsureAuthorized:prof']], function () {

    Route::get('/', [ProfController::class, 'show']);
    Route::get('/modules', [ProfController::class, 'modules']);
    // if apogee or fname (firstname) lname (lastname) is not  provided it return all student in that modules
    Route::get('/modules/{id}', [ProfController::class, 'students']); // get student how has that module
    Route::get('/logout', [ProfController::class, 'logout']);
    Route::post('/announce', [ProfController::class, 'announce']);
    Route::delete('/announce/{id}', [ProfController::class, 'deleteAnnounce']);
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

    // TODO:
    // Route::post('/complaints', [StudentController::class, 'add-complaints']);
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
    Route::get('/filieres', [FpkController::class, 'filiere']);
    Route::get('/filieres/schedule', [FpkController::class, 'schedule']);
    Route::get('/acadmic-year', [FpkController::class, 'acadmicYear']);
    Route::get('/emploi', function () {
        return (url(Storage::url('emploi/smi-s1.pdf')));
    });
});
