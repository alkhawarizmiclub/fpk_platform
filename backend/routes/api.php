<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProfAuth\EmailVerificationNotificationController;
use App\Http\Controllers\ProfAuth\RegisteredUserController;
use App\Http\Controllers\ProfAuth\AuthenticatedSessionController;
use App\Http\Controllers\ProfAuth\NewPasswordController;
use App\Http\Controllers\ProfAuth\PasswordResetLinkController;
use App\Http\Controllers\ProfAuth\VerifyEmailController;
use Illuminate\Http\Request;
use App\Http\Middleware\ProfVerify;

// Route::middleware(['auth:prof'])->get('/user', function (Request $request) {
//     return $request->user();
//     Route::apiResource('/students', StudentController::class);
// });

// Route::fallback(function (Illuminate\Auth\AuthenticationException $exception) {
//     return response()->json(['message' => $exception->getMessage()], 401);
// });
Route::middleware(['auth:sanctum', ProfVerify::class])->group(function () {
    Route::get('/prof', function (Request $request) {
        return $request->user();
    });
    Route::get('/prof/test', function () {
        return response()->json([
            'message' => 'Welcome to prof dashboard'
        ]);
    });
});

Route::middleware(['auth:student'])->group(function () {
    Route::get('/student', function (Request $request) {
        return $request->user();
    });

    Route::get('/student/test', function () {
        return response()->json([
            'message' => 'Welcome to prof dashboard'
        ]);
    });
});



Route::middleware(['guest'])->group(function () {
    Route::post('/register', [RegisteredUserController::class, 'store'])
        ->middleware(['guest:prof'])
        ->name('register');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(['guest:prof'])
        ->name('login');
});


Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');
