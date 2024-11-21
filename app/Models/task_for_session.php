<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task_for_session extends Model
{
    use HasFactory;

    protected $fillable=[
        'idSession',
        'idTask',
    ];
    
    public $timestamps=false;
    protected $table='task_for_session';
}
