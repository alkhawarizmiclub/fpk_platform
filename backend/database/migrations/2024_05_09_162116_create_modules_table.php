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
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prof_id')
                ->nullable();
            $table->string('module_name');
            $table->string('semester');

            $table->unsignedBigInteger('filiere_id')
                ->nullable();
            $table->foreign('prof_id')
                ->references('id')
                ->on('profs');

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
        Schema::dropIfExists('modules');
    }
};
