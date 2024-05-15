<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class ProfVerify
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): JsonResponse
    {
        if (!$request->user() || !$request->user()->tokenCan('role:prof')){
            return response()->json(
                [
                    'message' => 'You are not authorized to access this route.'
                ],
                403
            );
        }
        return $next($request);
    }
}
