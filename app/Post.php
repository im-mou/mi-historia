<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'type','deleted','last_saved','published','user_id','anonymous','uuid','slug'];

    public function story()
    {
        return $this->hasOne('App\Story','post_id');
    }

    public function answers()
    {
        return $this->belongsToMany('App\Question','answers')->withPivot('body');
    }
}
