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
        Schema::create('final_results', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('apogee');
            $table->unsignedBigInteger('module_id');
            $table->decimal('note', 6, 4);
            $table->string('session');
            $table->string('semester');
            $table->string('year');
            $table->foreign('apogee')
                ->references('apogee')
                ->on('students');

            $table->foreign('module_id')
                ->references('id')
                ->on('modules');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('final_results');
    }
};
