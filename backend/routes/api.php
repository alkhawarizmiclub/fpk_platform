<?php

use App\Http\Controllers\ProfController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ModuleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/students', StudentController::class);
Route::apiResource('/profs', ProfController::class);
Route::apiResource('/modules', ModuleController::class);
Route::get('/profs/{id}/modules', [ProfController::class, 'getModules']);
Route::get('/profs/{profId}/modules/{moduleId}', [ProfController::class, 'getListInscriptions']);
