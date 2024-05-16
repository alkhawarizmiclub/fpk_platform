<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProfController;
use Illuminate\Http\Request;
use App\Http\Middleware\VerifyProf;
use App\Http\Middleware\VerifyStudent;

Route::group(['prefix' => 'prof', 'middleware' => ['auth:sanctum', VerifyProf::class]], function () {
    Route::get('/', [ProfController::class, 'show']);
    Route::get('/modules', [ProfController::class, 'modules']);
    Route::get('/logout', [ProfController::class, 'logout']);
});


Route::group(['prefix' => 'student', 'middleware' => ['auth:sanctum', VerifyStudent::class]], function () {
    Route::get('/', [StudentController::class, 'show']);
    Route::get('/result', [StudentController::class, 'result']);
    Route::get('/profile', 'AdminController@users');
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

