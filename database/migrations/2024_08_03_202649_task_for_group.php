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
        Schema::create('task_for_group',function(Blueprint $table){
            $table->unsignedBigInteger('groupId');
            $table->unsignedBigInteger('taskId');

            $table->foreign('groupId')->references('id')->on('groupTask')->onDelete('cascade');
            $table->foreign('taskId')->references('id')->on('task')->onDelete('cascade');
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
