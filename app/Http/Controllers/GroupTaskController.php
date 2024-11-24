<?php

namespace App\Http\Controllers;

use App\Models\GroupTask;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GroupTaskController extends Controller
{
    public function getGroupTask(){
        $idUsuario=Auth::id();
        $groupTask=GroupTask::where('idUsuario',$idUsuario)->with('Tasks')
        ->orderBy('created_at','desc')
        ->paginate(5);
        return $groupTask;
    }

    public function store(Request $request){

        $groupTask=new GroupTask();

        $groupTask->nameGroup=$request->input('name');
        $groupTask->idUsuario=Auth::id();

        $groupTask->save();

        $groupTask->Tasks()->attach($request->input('tasksSelect'));

        return $request;
    }

    public function search(Request $request){

        $idUsuario=Auth::id();

        $GroupTasks=GroupTask::where('nameGroup','LIKE','%' . $request->input('query') . '%')
        ->where('idUsuario',$idUsuario)->with('Tasks')
        ->orderBy('created_at','desc')
        ->paginate(5);

        return $GroupTasks;
    }

    public function destroy(String $id){

        $group=GroupTask::find($id);
        $group->delete();

        return $id;
    }

    public function removeTask(Request $request){

        $groupTask=GroupTask::find($request->input('idGroup'));

        //Eliminar la relacion de la tabla pivote entre el grupo y tarea
        $groupTask->tasks()->detach($request->input('idTask'));

        return $request;
    }

    public function addTaskToGroup(Request $request){
        $Grupo=GroupTask::find($request->input('idGroup'));


        foreach ($request->input('listTaskAdd') as $idTask) {
            $Grupo->Tasks()->attach($idTask);
        }

        $grupo=new GroupTaskController();
        $grupoReturn=$grupo->getGroupInfo($request->input('idGroup'));

        return $grupoReturn;

    }

    public function deleteTaskGroup(Request $request){
        $Grupo=GroupTask::find($request->input("idGrupo"));
        $Grupo->Tasks()->detach($request->input("idTask"));
    }

    public function getGroupInfo(String $idGrupo){
        $Grupo=GroupTask::with('Tasks')->find($idGrupo);
        return $Grupo;
    }
}
