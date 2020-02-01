<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    protected $fillable = ['body', 'post_id'];

    public function post()
    {
        return $this->belongsTo('App\Post','post_id');
    }
}
