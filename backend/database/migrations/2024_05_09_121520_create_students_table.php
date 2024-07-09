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
            $table->string("firstname");
            $table->string("lastname");
            $table->string("firstname_ar");
            $table->string("lastname_ar");
            $table->date("birth_date");
            $table->string("birth_place");
            $table->string("student_code");
            $table->string("nationality");
            $table->string("id_num");
            $table->string("email")->unique();
            $table->string("phone")->unique();
            $table->string("emergencyPhone");
            $table->string("address");
            $table->unsignedBigInteger("filiere_id");
            $table->string("password");
            $table->string("gender");
            $table->string("baccalaureat");
            $table->string("releve_note");
            $table->string("image_presonnal");
            $table->string("identify_recto_verso");
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();


            $table->foreign('filiere_id')
                ->references('id')
                ->on('filieres');
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
