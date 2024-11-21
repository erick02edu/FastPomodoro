<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Providers\SesionPomodoroService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(SesionPomodoroService::class,function($app){
            return new SesionPomodoroService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
