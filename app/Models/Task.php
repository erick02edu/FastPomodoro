<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\SessionPomodoro;

class Task extends Model
{
    use HasFactory;

    protected $fillable=[
        'NombreTask',
        'TimeInterval',
        'breakTime',
        'numPomodoros',
        'breakTimeLong',
        'numPomoBreakTime',
        'idUsuario'
    ];

    protected $table="task";

    public function sessions(){
        return $this->belongsToMany(SessionPomodoro::class,'task_for_session','idTask', 'idSession');
    }

    public function GroupTask(){
        return $this->belongsToMany(GroupTask::class,'task_for_group','taskId','groupId');
    }

}
