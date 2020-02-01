<?php

namespace App\Http\Middleware;

use Closure;
use App\Post;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class CreatePost
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $type)
    {
        $post = Post::create([
            'type' => $type,
            'user_id' => auth()->user()->id,
        ]);
        
        if(!is_null($post)) {
            $token = md5(time().Auth::user()->id.$post->id);
            $post->uuid = $token;
            if($post->save()) {
                return redirect()->route('post.'.$type, $token);
            } else {
                return redirect()->route('/')->withMessage("Ha occurido un error!");
            }

        } else {
            return redirect()->route('/')->withMessage("Ha occurido un error!");
        }

        //return $next($request);
    }
}
