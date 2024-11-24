<?php

use App\Http\Controllers\GroupTaskController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/login-google',[App\Http\Controllers\Auth\LoginController::class,'LoginGoogle'])->name('login-google');
Route::get('/google-callback',[App\Http\Controllers\Auth\LoginController::class,'LoginGoogleCallback'])->name('login-google-return');

Route::get('/funciones/{any?}',function(){
    return view("Funciones");
})->where('any', '.*')->name('funciones');


//Rutas protegidas
Route::middleware(['auth'])->group(function(){

    Route::get('/home/{any?}', [HomeController::class, 'index'])->where('any', '.*')->name('home');

    Route::get('/getUser',[App\Http\Controllers\UserController::class,'getUserAuth']);
    Route::post('/saveConfig',[App\Http\Controllers\UserController::class,'saveConfig']);
    Route::post('/changeImgPerfil',[App\Http\Controllers\UserController::class,'changeImgPerfil']);
    Route::delete('/user/{id}',[App\Http\Controllers\UserController::class,'delete']);

    Route::resource('task',TaskController::class)->only(['index','store','update','destroy']);
    Route::get('/taskUser',[App\Http\Controllers\TaskController::class,'getTaskUser']);
    Route::get('/tasksPaginate',[App\Http\Controllers\TaskController::class,'getTaskPaginate']);
    Route::get('/searchTask',[App\Http\Controllers\TaskController::class,'searchTask']);
    Route::get('/getUnassociatedTasks',[App\Http\Controllers\TaskController::class,'getUnassociatedTasks']);
    Route::post("/addTaskFast/{name}",[App\Http\Controllers\TaskController::class,'AddTaskFast']);
    Route::get("/getInfoTask",[App\Http\Controllers\TaskController::class,'getInfoTask']);

    Route::resource('sesion',SessionController::class)->only(['index','store','update','destroy']);
    Route::get('/getSesions',[App\Http\Controllers\SessionController::class,'getSessionUser']);
    Route::get('/renameSesion',[App\Http\Controllers\SessionController::class,'renameSesion']);
    Route::get('/searchSesion',[App\Http\Controllers\SessionController::class,'searchSesion']);
    Route::get('/getSesionInfo/{id}',[App\Http\Controllers\SessionController::class,'getSesionInfo']);
    Route::get('/sessionPomodoro/{id}',[App\Http\Controllers\SessionController::class,'sesionPlay']);
    Route::get('/getRecentSesions',[App\Http\Controllers\SessionController::class,'getRecentSesions']);
    Route::post('/addTaskSesion',[App\Http\Controllers\SessionController::class,'addTaskSesion']);
    Route::get('/taskMissingFromSesion',[\App\Http\Controllers\SessionController::class,'getTaskMissingFromSesion']);
    Route::put('/updateTaskOrder',[App\Http\Controllers\SessionController::class,'updateTaskOrder']);
    Route::delete('/deleteTaskSesion',[App\Http\Controllers\SessionController::class,'deleteTaskSesion']);

    Route::get('getGroupTask',[App\Http\Controllers\GroupTaskController::class,'getGroupTask']);
    Route::resource('groupTask',GroupTaskController::class)->only('store','update','destroy');
    Route::get('/searchGroup',[App\Http\Controllers\GroupTaskController::class,'search']);
    ROute::delete('/removeTask',[App\Http\Controllers\GroupTaskController::class,'removeTask']);
    Route::post('/addTaskToGroup',[App\Http\Controllers\GroupTaskController::class,'addTaskToGroup']);
    Route::get('/getGroupInfo/{id}',[App\Http\Controllers\GroupTaskController::class,'getGroupInfo']);
    Route::delete('/deleteTaskGroup',[App\Http\Controllers\GroupTaskController::class,"deleteTaskGroup"]);

});
