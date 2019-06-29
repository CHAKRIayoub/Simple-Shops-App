<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ComposantCommande extends Model
{
    public $timestamps = true;
    protected $table = 'commandes_composants';
}
