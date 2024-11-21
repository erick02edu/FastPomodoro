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
        Schema::create('groupTask',function(Blueprint $table){
            $table->id();
            $table->string('nameGroup');
            $table->unsignedBigInteger('idUsuario');
            $table->timestamps();

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
