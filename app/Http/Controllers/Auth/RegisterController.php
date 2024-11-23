<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */

    protected function create(array $data)
    {



        $newUser= User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'avatar'=> env('VITE_API_URL') . '/img/Avatares/AvatarDefault.png'
        ]);

        // Definir las configuraciones por defecto
        $newUser->settings()->create([
            'TimeInterval'=>25,
            'breakTime'=>5,
            'numPomodoros'=>3,
            'numPomoBreakTime'=>4,
            'breakTimeLong'=>15,
            'darkMode'=>false,
            'idUsuario'=>$newUser->id
        ]);

        // $data=[
        //     'TimeInterval'=>25,
        //     'breakTime'=>5,
        //     'numPomodoros'=>3,
        //     'numPomoBreakTime'=>4,
        //     'breakTimeLong'=>5,
        //     'darkMode'=>false
        // ];

        // $newUser->setting()->updateOrCreate([], $data);


        return $newUser;
    }
}
