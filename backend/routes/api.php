<?php

use App\Http\Controllers\ProfController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ModuleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Id may get remove from the route after add auth

Route::apiResource('/students', StudentController::class);
Route::apiResource('/profs', ProfController::class);
Route::apiResource('/modules', ModuleController::class);

//stduent
Route::get('/students/{id}/modules', [StudentController::class, 'modules']);
Route::get('/students/{id}/result', [studentController::class, 'getResult']);

// prof
Route::get('/profs/{profId}/modules', [ProfController::class, 'modules']);
Route::get('/profs/{profId}/modules/{moduleId}', [ProfController::class, 'listStudents']);
Route::put('/profs/{profId}/add-result/', [ProfController::class, 'addResult']);

// admin
Route::post('/admins/assign-prof', [AdminController::class, 'assignProf']);



