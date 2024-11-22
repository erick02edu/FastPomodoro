<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/getUser/{id}',function(String $id){
    $user=User::find($id);

    return $user->name;
    // if($user){
    //     response()->json([
    //         'success' => true,
    //         'data' => $user->name
    //     ]);
    // }
    // else{
    //     return response()->json([
    //         'success' => false,
    //         'message' => 'Usuario no encontrado'
    //     ], 404);
    // }
});
