<?php

namespace App\Http\Controllers;
use App\Models\Task;
use App\Providers\SesionPomodoroService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{

    protected $serviceSesion;

    public function __construct(SesionPomodoroService $service)
    {
        $this->serviceSesion=$service;
    }

    public function store(Request $request){

        $idUsuario=Auth::id();


        $task=new Task();

        $Validated=$request->validate([
            'name'=>'required',
            'numPomodoros'=>'required|numeric|min:1',
            'timeInterval'=>'numeric|min:0',
            'timeBreak'=>'numeric|min:0',
            'timeBreakLong'=>'numeric|min:0',
            'numPomBreakTime'=>'numeric|min:0'
        ]);

        $task->NombreTask=$request->input('name');
        $task->numPomodoros=$request->input('numPomodoros');
        $task->TimeInterval=$request->input('timeInterval');
        $task->breakTime=$request->input('timeBreak');
        $task->breakTimeLong=$request->input('timeBreakLong');
        $task->numPomoBreakTime=$request->input('numPomBreakTime');

        $task->duration=$this->serviceSesion->calculateDurationTask($task->numPomodoros,$task->TimeInterval,$task->numPomoBreakTime,$task->breakTimeLong,$task->breakTime);
        $task->idUsuario=$idUsuario;

        $task->save();

    }

    public function getTaskUser(){
        $idUsuario=Auth::id();
        $tasks=Task::where('idUsuario',$idUsuario)->get();
        return $tasks;
    }

    public function ObtenerDuracion($idTask){
        $duracion=200;
        return $duracion;
    }

    public function getTaskPaginate(Request $request){
        $idUsuario=Auth::id();

        $omitTasks=$request->input('omitTask');

        $tasks=Task::when(!empty($omitTasks),function($query) use ($omitTasks){
            return $query->whereNotIn('id',$omitTasks);
        })->where('idUsuario',$idUsuario)->orderBy('created_at','desc')->paginate(5);

        return $tasks;
    }


    public function searchTask(Request $request){

        $idUsuario=Auth::id();
        $omitTasks=$request->input('omitTask');

        $tasks=Task::when(!empty($omitTasks),function($query) use ($omitTasks){
            return $query->whereNotIn('id',$omitTasks);
        })->where('NombreTask','LIKE','%' . $request->input('query') . '%')
        ->where('idUsuario',$idUsuario)
        ->orderBy('created_at','desc')
        ->paginate(5);

        return $tasks;
    }

    public function update(String $id,Request $request){

        $task=Task::find($id);

        $newTask=$request->input('newTask');

        if($task){
            $task->update($newTask);
        }

        $this->serviceSesion->updateDurationTask($id);
        return $newTask;
    }

    public function destroy(String $id){
        $task=Task::find($id);

        $sesionRelatedTask=$task->sessions;

        if($task){
            $task->delete();
        }

        foreach ($sesionRelatedTask as $sesion) {
            $this->serviceSesion->updateDurationSesion($sesion->id);
        }

        return $id;
    }

    public function getUnassociatedTasks(Request $request){

        $idGrupo=$request->input('idGroup');
        $tasksNotInGroup = Task::whereDoesntHave('GroupTask', function ($query) use ($idGrupo) {
            $query->where('groupId','=', $idGrupo);
        })->get();

        return $tasksNotInGroup;
    }

    public function AddTaskFast(string $name){

        $user=Auth::user();
        $settings=$user->settings;

        $newTask=new Task();

        $newTask->NombreTask=$name;
        $newTask->TimeInterval=$settings->TimeInterval;
        $newTask->breakTime=$settings->breakTime;
        $newTask->numPomodoros=$settings->numPomodoros;
        $newTask->breakTimeLong=$settings->breakTimeLong;
        $newTask->numPomoBreakTime=$settings->numPomoBreakTime;
        $newTask->idUsuario=$user->id;
        $newTask->duration=$this->serviceSesion->calculateDurationTask($settings->numPomodoros,$settings->TimeInterval,$settings->numPomoBreakTime,$settings->breakTimeLong,$settings->breakTime);

        $newTask->save();

        return $newTask;
    }

    public function getInfoTask(Request $request){
        $task=Task::find($request->id);
        return $task;
    }

}
