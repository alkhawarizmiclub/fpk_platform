<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProfController;
use App\Http\Controllers\FpkController;
use App\Http\Controllers\ModuleController;

Route::group(['prefix' => 'prof', 'middleware' => ['auth:sanctum', 'EnsureAuthorized:prof']], function () {

    Route::get('/', [ProfController::class, 'show']);
    Route::get('/modules', [ProfController::class, 'modules']);
    Route::get('/modules/{id}', [ProfController::class, 'student']); // get student how has that module
    Route::get('/logout', [ProfController::class, 'logout']);
    Route::post('/announce', [ProfController::class, 'announce']);
    Route::post('/add-result', [ProfController::class, 'result']);

    // TODO: add search functionality to get student by name or apogee
    Route::get('/modules/{id}?search=', [ProfController::class, 'student']);
});

Route::group(['prefix' => 'admin', 'middleware' => ['auth:sanctum', 'EnsureAuthorized:admin']], function () {

    Route::get('/logout', [AdminController::class, 'logout']);
    Route::post('/add-module', [ModuleController::class, 'store']);
    Route::post('/modules', [ModuleController::class, 'index']);
    Route::get('/gn-note', [AdminController::class, 'genreateFinalResult']);
    Route::post('/add-prof', [ProfController::class, 'store']);
});

Route::group(['prefix' => 'student', 'middleware' => ['auth:sanctum', 'EnsureAuthorized:student']], function () {
    Route::get('/', [StudentController::class, 'show']);
    Route::get('/result', [StudentController::class, 'result']);
    Route::get('/modules', [StudentController::class, 'modules']);
    Route::get('/final-result', [StudentController::class, 'finalResult']);
    Route::get('/logout', [StudentController::class, 'logout']);
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
    // get all with pagination
    Route::get('/announce', [FpkController::class, 'announce']);
    Route::get('/acadmic-year', [FpkController::class, 'acadmicYear']);
});


