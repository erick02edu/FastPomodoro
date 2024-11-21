<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUserAuth(){
        $user=Auth::user()->only(['id', 'name', 'email','avatar']);
        return $user;
    }

    public function saveConfig(Request $request){

        $user=Auth::user();

        $newConfig=$request->validate([
            'TimeInterval'=>'required',
            'breakTime'=>'required',
            'numPomodoros'=>'required',
            'numPomoBreakTime'=>'required',
            'breakTimeLong'=>'required',
            'darkMode'=>'required'
        ]);

        $user->settings()->updateOrCreate([], $newConfig);
    }

    public function changeImgPerfil(Request $request){

        $user=Auth::user();
        $user->avatar=$request->input('urlImg');
        $user->save();

        return $request->input('urlImg');
    }

    public function delete(String $id){

        $user=User::find($id);
        $user->delete();
        
        return $user;
    }
}
