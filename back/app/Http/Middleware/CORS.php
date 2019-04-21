<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        header('Access-Control-Allow-Origin : *');
        header( 'Access-Control-Allow-Headers : Origin, X-Auth-Token, Content-Type, Authorization');

        
        return $next($request);
    }
}
