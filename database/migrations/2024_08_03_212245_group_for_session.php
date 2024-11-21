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
        Schema::create('group_for_session',function(Blueprint $table){
            $table->unsignedBigInteger('idSession');
            $table->unsignedBigInteger('idGroupTask')->nullable();

            $table->foreign('idSession')->references('id')->on('session_pomodoro')->onDelete('cascade');
            $table->foreign('idGroupTask')->references('id')->on('groupTask')->onDelete('cascade');
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
