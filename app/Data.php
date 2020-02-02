<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $fillable = ['name', 'surname','nationality', 'city','arrival_year','age_year'];

    public function user()
    {
        return $this->hasOne('App\User');
    }
}
