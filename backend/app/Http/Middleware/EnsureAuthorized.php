<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAuthorized
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!$request->user() || !$request->user()->tokenCan("role:$role")) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'You are not authorized',
                    'data' => null
                ],
                403
            );
        }
        return $next($request);
    }
}
