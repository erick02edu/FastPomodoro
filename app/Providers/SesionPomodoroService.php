<?php

namespace App\Providers;

use App\Models\SessionPomodoro;
use App\Models\Task;

class SesionPomodoroService{

    public int $tiempoTarea=0;

    public function getDurationTask($taskId){

        return Task::find($taskId)->duration;
    }

    public function recoverDurationTask($idTarea):int{

        $tarea=Task::find($idTarea);
        $timePomodoros=$tarea->numPomodoros *$tarea->TimeInterval;

        $timeBreakTimeLong=0;
        $numDesTotal=$tarea->numPomodoros-1;

        if($tarea->numPomoBreakTime>0){
            // $numBreakLong=$numDesTotal % $tarea->numPomoBreakTime;
            $numBreakLong=floor(($numDesTotal)/(($tarea->numPomoBreakTime+1)));
            $timeBreakTimeLong=$numBreakLong*$tarea->breakTimeLong;
        }
        else{
            $numBreakLong=0;
        }

        $timeBreakTimeShort=($numDesTotal-$numBreakLong)*($tarea->breakTime);


        $this->tiempoTarea=$timePomodoros+$timeBreakTimeLong+$timeBreakTimeShort;

        return $this->tiempoTarea;
    }

    public function UpdateSesionRelatedTask(String $idTask){
        $Task=Task::find($idTask);
        $sesiones=$Task->sessions;

        if(count($sesiones)>0){
            foreach ($sesiones as $sesion) {
                $this->updateDurationSesion($sesion->id);
            }
        }
    }

    public function updateDurationTask(String $idTask){

        $newDuration=$this->recoverDurationTask($idTask);

        $Task=Task::find($idTask);

        $Task->duration=$newDuration;

        $Task->save();

        //FUNCION
        $this->UpdateSesionRelatedTask($idTask);

    }

    public function updateDurationSesion($idSesion){

        $sesion=SessionPomodoro::with('tasks')->find($idSesion);

        $newDuration=0;
        foreach ($sesion->tasks as $task) {
            $durationTask=$this->getDurationTask($task->id);
            $newDuration=$newDuration+$durationTask;
        }

        $sesion->totalTimeSeg=$newDuration;
        $sesion->save();

        return $newDuration;
    }

    public function calculateDurationTask($numPomodoros,$tiempoPomodoros,$numDescLargos,$tiempoDescLargos,$tiempoDescCortos):int{

        $timePomodoros=$numPomodoros * $tiempoPomodoros;

        $timeBreakTimeLong=0;
        $numDesTotal=$numPomodoros-1;

        if($numDescLargos>0){
            // $numBreakLong=$numDesTotal % $tarea->numPomoBreakTime;
            $numBreakLong=floor(($numDesTotal)/(($numDescLargos+1)));
            $timeBreakTimeLong=$numBreakLong*$tiempoDescLargos;
        }
        else{
            $numBreakLong=0;
        }

        $timeBreakTimeShort=($numDesTotal-$numBreakLong)*($tiempoDescCortos);

        $this->tiempoTarea=$timePomodoros+$timeBreakTimeLong+$timeBreakTimeShort;

        return $this->tiempoTarea;
    }



}




