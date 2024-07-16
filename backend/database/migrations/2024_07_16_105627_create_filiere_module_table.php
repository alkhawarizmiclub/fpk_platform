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
        // this table used for mapping new student to there module
        // after this if student validate a module it get map from module_maping
        // table that tall each module what is next equivalent module
        Schema::create('module_init', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('filiere_id');
            $table->unsignedBigInteger('module_id');


            $table->foreign('filiere_id')->references('id')->on('filieres')->onDelete('cascade');
            $table->foreign('module_id')->references('id')->on('modules')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('filiere_module');
    }
};
