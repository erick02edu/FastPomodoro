<?php

namespace App\Http\Controllers;

use App\Models\SessionPomodoro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = Auth::user();

        if($user){
            $settings=$user->settings;
            $userData = $user->only(['id', 'name', 'email', 'avatar','avatar_external','created_at']);

            $Path="img/Avatares";
            $Paths=array_diff(scandir($Path), array('.', '..') );
            $ListAvatares=array_values($Paths);

            return response()
                ->view('home', [
                    'user' => $userData,
                    'avatares' => $ListAvatares,
                    'settings' => $settings
                ])
                ->header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')  // No cachear
                ->header('Pragma', 'no-cache')  // Evitar cacheo
                ->header('Expires', '0');  // Asegurar que haya expirado
            }

        else{
            return redirect()->route('login');
        }
    }
}
