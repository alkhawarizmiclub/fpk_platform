<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;

Route::get('/', function () {
    // Log::channel('stderr')->error("This is an error message in the custom channel.");
    return ['Laravel' => app()->version()];
});

require __DIR__ . '/auth.php';
