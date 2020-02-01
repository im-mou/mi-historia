<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = ['body', 'post_id','question_id'];

    public function question()
    {
        return $this->hasMany('App\Question');
    }
}
