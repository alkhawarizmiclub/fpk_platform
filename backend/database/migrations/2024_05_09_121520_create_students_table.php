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
        Schema::create('students', function (Blueprint $table) {
            $table->unsignedBigInteger("apogee")->primary()->autoIncrement();
            $table->string("password");
            $table->string("phone_number");
            $table->string("firstname");
            $table->string("lastname");
            $table->date("birth_date");
            $table->string("email")->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string("gender");
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
