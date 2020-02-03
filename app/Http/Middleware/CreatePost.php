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

        // check if there is a post with no content
        $recentEmptyPost = Post::where([
            'type' => $type,
            'user_id' => auth()->user()->id,
        ]);

        // open the first post that has no content
        if($type === 'story') {
            $post = $recentEmptyPost->doesntHave('story')->first();
        } elseif($type === 'question') {
            $post = $recentEmptyPost->doesntHave('answers')->first();
        }

        // check if an empty post was found
        if(!is_null($post)) {
            return redirect()->route('post.'.$type, $post->uuid);
        }

        // if there is no old empty post then create a new one
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
    }
}
