<?php

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Exceptions\PostTooLargeException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->api(prepend: [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ]);

        $middleware->alias([
            'verified' => \App\Http\Middleware\EnsureEmailIsVerified::class,
            'EnsureAuthorized' => \App\Http\Middleware\EnsureAuthorized::class,
        ]);

        $middleware->validateCsrfTokens(except: [
            "api/*",
        ]);

    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
                'data' => null
            ], 401);
        });

        $exceptions->render(function (AuthenticationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
                'data' => null
            ], 401);
        });
        $exceptions->render(function (AuthorizationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
                'data' => null
            ], 401);
        });

        $exceptions->render(function (MethodNotAllowedHttpException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'unsupported http method',
                'data' => null
            ], 405);
        });

        $exceptions->render(function (NotFoundHttpException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'route not found',
                'data' => null
            ], 404);
        });

        $exceptions->render(function (PostTooLargeException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'post data too large',
                'data' => null
            ], 404);
        });

    })->create();
