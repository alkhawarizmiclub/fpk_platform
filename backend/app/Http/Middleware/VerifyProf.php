<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VerifyProf
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
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
