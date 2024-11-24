<?php

namespace App\Http\Controllers;

use App\Models\GroupTask;
use Illuminate\Http\Request;
use App\Models\SessionPomodoro;
use Illuminate\Support\Facades\Auth;
use App\Models\task_for_session;
use App\Providers\SesionPomodoroService;
use Carbon\Carbon;
use DateTime;
use Exception;
use Illuminate\Support\Facades\DB;

class SessionController extends Controller
{
    protected $SesionService;

    public function __construct(SesionPomodoroService $service)
    {
        $this->SesionService=$service;
    }

    public function sesionPlay($id){

        $idUsuario=Auth::id();
        $session=SessionPomodoro::with('tasks')->find($id);

        //Verificar que la sesion pertenezca al usuario autenticado
        if($session->idUsuario==$idUsuario){
            //Obtener songs
            $Path="Songs";
            $Paths=array_diff(scandir($Path), array('.', '..') );
            $Songs = array_values($Paths);

            //Obtener alarmas
            $Path="TonoFinishPomo";
            $Paths=array_diff(scandir($Path), array('.', '..') );
            $TonosPomodoro = array_values($Paths);

            $Path="TonoFinishTask";
            $Paths=array_diff(scandir($Path), array('.', '..') );
            $TonosTask = array_values($Paths);

            $Path="TonoFinishSesion";
            $Paths=array_diff(scandir($Path), array('.', '..') );
            $TonoFinishSesion = array_values($Paths);

            //Obtener configuracion de modo oscuro o claro
            $settings=Auth::user()->settings;

            //Agrupar informacion
            $data = [
                'idSesion'=>$session->id,
                'nameSesion' => $session->name,
                'tasks' => $session->tasks,
                'Songs'=>$Songs,
                'TonosPomodoro'=>$TonosPomodoro,
                'TonosTask'=>$TonosTask,
                'TonoFinishSesion'=>$TonoFinishSesion,
                'darkMode'=>$settings->darkMode
            ];

            //Actualizar la fecha en que se abrio la sesion
            Carbon::setLocale('es');
            $session->lastOpening=Carbon::now('America/Mexico_City');
            $session->save();

            return response()
            ->view('auth.SessionPomodoro',['datos' => $data])
            ->header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')  // No cachear
            ->header('Pragma', 'no-cache')  // Evitar cacheo
            ->header('Expires', '0');

        }
        else{
            return back();
        }
    }

    public function renameSesion(Request $request){
        $sesion=SessionPomodoro::find($request->id);

        if($sesion && $request->newName){
            $sesion->name=$request->newName;
            $sesion->save();
        }
    }

    public function store(Request $request){
        date_default_timezone_set('America/Mexico_City');
        $newSesion=new SessionPomodoro();
        //Validacion
        $validateData=$request->validate([
            'name'=>'required|string|max:35'
        ]);

        $newSesion->name=$validateData['name'];
        //Calcular tiempo del pomodoro
        $durationSesion=0;

        if(count($request->ListTask) > 0){
            foreach ($request->ListTask as $index => $taskId) {
                $durationTask=$this->SesionService->getDurationTask($taskId);
                $durationSesion=$durationSesion+$durationTask;
            }
        }

        $newSesion->totalTimeSeg=$durationSesion;


        Carbon::setLocale('es');
        $newSesion->lastOpening=Carbon::now('America/Mexico_City');

        $newSesion->idUsuario=Auth::id();
        $newSesion->save();


        if(count($request->ListTask) > 0){
            foreach ($request->ListTask as $index => $taskId) {
                $tasksWithOrder[$taskId] = ['order' => $index + 1];
            }
            $newSesion->tasks()->attach($tasksWithOrder);
        }

        if(count($request->GroupTask) > 0){
            foreach($request->GroupTask as $group){
                $tasksGroup=GroupTask::with('Tasks')->find($group)->tasks;
                $newSesion->tasks()->syncWithoutDetaching($tasksGroup);
            }
           $newSesion->groupTasks()->attach($request->GroupTask);

           $this->SesionService->updateDurationSesion($newSesion->id);
        }

        return $newSesion->id;
    }

    public function getSessionUser(Request $request){

        $perPage = 7; // Número de registros por página
        $idUser=Auth::id();
        $sesiones=SessionPomodoro::where('idUsuario',$idUser)
        ->orderBy('lastOpening','desc')
        ->paginate($perPage);

        return $sesiones;
    }

    function getSesionInfo($id){

        //Verificar que la sesión pertenezca al usuario authenticado
        try{
            $InfoSesion=SessionPomodoro::with('tasks')->find($id);

        }catch(Exception $e){
            $InfoSesion=null;
        }
        return $InfoSesion;
    }

    public function searchSesion(Request $request){

        $perPage=7;
        $idUser=Auth::id();

        $sesions=SessionPomodoro::where('idUsuario',$idUser)
        ->where('name','LIKE','%' . $request->input('query') . '%')
        ->orderBy('lastOpening','desc')
        ->paginate($perPage);

        return $sesions;
    }

    public function destroy(string $id)
    {
        $sesionDelete=SessionPomodoro::find($id);
        $sesionDelete->delete();
        return $id;
    }

    public function getRecentSesions(){
        $viewSesionRecent=5;
        $Sesiones=SessionPomodoro::where("idUsuario",Auth::id())->orderBy('lastOpening','desc')->take($viewSesionRecent)->get();
        return $Sesiones;
    }

    public function addTaskSesion(Request $request){

        $sesion=SessionPomodoro::find($request->idSesion);
        $maxOrden = $sesion->tasks()->max('order');
        $tasksWithOrder = [];

        foreach ($request->tasks as $index => $taskId) {
            $tasksWithOrder[$taskId] = ['order' =>$maxOrden+ ($index + 1)];
        }

        if ($sesion) {
            // Adjunta las tareas a la sesión
            $sesion->tasks()->attach($tasksWithOrder);
        }

        // Actualiza la duración de la sesión después de adjuntar
        $newDuration=$this->SesionService->updateDurationSesion($request->idSesion);
        return $newDuration;
    }

    public function updateTaskOrder(Request $request){
        $sesion=SessionPomodoro::find($request->input("idSesion"));

        foreach ($request->input("listTasks") as $index => $taskId) {
            $sesion->tasks()->updateExistingPivot($taskId, ['order' => $index+1]);
        }
    }

    public function deleteTaskSesion(Request $request){
        $sesion=SessionPomodoro::find($request->input("idSesion"));
        $sesion->tasks()->detach($request->input("idTask"));

        $newDuration=$this->SesionService->updateDurationSesion($request->input("idSesion"));
        return $newDuration;
    }

}
