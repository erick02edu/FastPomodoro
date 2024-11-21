<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use App\Models\Task;

class SessionPomodoro extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'totalTimeSeg',
        'idUsuario'
    ];

    protected $table='session_pomodoro';

    public function tasks(){
        return $this->belongsToMany(Task::class,'task_for_session','idSession','idTask')->withPivot('order')->orderBy('pivot_order');
    }

    public function groupTasks(){
        return $this->belongsToMany(GroupTask::class,'group_for_session','idSession','idGroupTask');
    }

}
