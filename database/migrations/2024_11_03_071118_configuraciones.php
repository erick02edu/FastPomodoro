<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings',function(Blueprint $table){
            $table->id();
            $table->integer('TimeInterval');
            $table->integer('breakTime');
            $table->integer('numPomodoros');
            $table->integer('numPomoBreakTime');
            $table->integer('breakTimeLong');
            $table->boolean('darkMode');
            $table->unsignedBigInteger('idUsuario');
            $table->foreign('idUsuario')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
