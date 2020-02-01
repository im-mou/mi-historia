<?php

namespace App\Http\Middleware;

use Closure;
use App\Post;
use Illuminate\Support\Facades\Auth;

class FilterPostType
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
        $postType = $request->segment(1);
        $type = '';

        if($postType === 'responder-a-preguntas') {
            $type = 'question';
        } elseif($postType === 'contar-mi-historia') {
            $type = 'story';
        }

        $uuid = $request->segment(2);
        if(is_null(Post::where(['uuid' => $uuid,'type' => $type, 'user_id'=>Auth::user()->id])->first())) {
            return abort(404);
        }
        return $next($request);
    }
}
