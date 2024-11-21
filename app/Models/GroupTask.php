<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class GroupTask extends Model
{
    use HasFactory;

    protected $table="grouptask";

    public function sessions(){
        return $this->belongsToMany(SessionPomodoro::class,'group_for_session','idGroupTask','idSession');
    }

    public function Tasks(){
        return $this->belongsToMany(Task::class,'task_for_group','groupId','taskId');
    }
}
