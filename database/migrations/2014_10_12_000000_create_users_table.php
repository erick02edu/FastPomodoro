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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();

            $table->string('password')->nullable(); //password nulleable
            $table->string("external_id")->nullable(); //Id externo de las apis
            $table->string("type_auth")->nullable(); // Tipo de autenticación: google, facebook, etc
            $table->string("avatar")->nullable(); //URL de imagen de perfil
            $table->string("avatar_external")->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
