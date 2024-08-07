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
        Schema::create('filieres', function (Blueprint $table) {
            $table->id();
            $table->string("filiere_name");
            $table->string("filiere_abrv");
            $table->unsignedBigInteger("responsible_id")->nullable();
            $table->unsignedBigInteger("department_id")->nullable();

            $table->foreign('responsible_id')
                ->references('id')
                ->on('profs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('filiere');
    }
};
