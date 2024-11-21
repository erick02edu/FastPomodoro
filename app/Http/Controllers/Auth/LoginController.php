<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('auth')->only('logout');
    }

    public function LoginGoogle(){
        return Socialite::driver('google')->redirect();
    }

    public function LoginGoogleCallback(){
        try{
            $user = Socialite::driver('google')->user();

             //Obtener usuario para saber si ya se registro anteriormente
            $userExist=User::where('external_id',$user->id)->where('type_auth','google')->first();

            //Verificar que no se haya registrado con google anteriormente
            if($userExist){
                //Hacer login
                Auth::login($userExist);
                return redirect('/home');
            }
            else{
                //Si no existe lo registramos

                $newUser=User::create([
                    'name'=>$user->name,
                    'email'=>$user->email,
                    'external_id'=>$user->id,
                    'type_auth'=>'google',
                    'avatar'=>$user->avatar,
                    'avatar_external'=>$user->avatar
                ]);

                //Agregar configuraciones para este usuario
                $newUser->settings()->create([
                    'TimeInterval'=>25,
                    'breakTime'=>5,
                    'numPomodoros'=>3,
                    'numPomoBreakTime'=>4,
                    'breakTimeLong'=>5,
                    'darkMode'=>false,
                    'idUsuario'=>$newUser->id
                ]);

                //Hacemos login con ese nuevo usuario
                Auth::login($newUser);
                return redirect('/home');
        }

            //dd($user);
        }
        catch(Exception $e){
            return redirect('login');
        }
    }



}
