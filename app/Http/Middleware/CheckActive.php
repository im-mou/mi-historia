<?php

namespace App\Http\Middleware;

use Closure;

class CheckActive
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
        if (auth()->check() && !auth()->user()->active) {
            auth()->logout();
            $message = 'Tu cuenta ha sido desactivada. Contacta con el administrador.';
            return redirect()->route('login')->withMessage($message);
        } 
        return $next($request);
    }
}
