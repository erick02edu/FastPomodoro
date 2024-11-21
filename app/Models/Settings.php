<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;

    protected $fillable=[
        'TimeInterval',
        'breakTime',
        'numPomodoros',
        'numPomoBreakTime',
        'breakTimeLong',
        'darkMode',
        'idUsuario'
    ];

    public $timestamps = false;
    
    public function user(){
        return $this->belongsTo(User::class);
    }

}
