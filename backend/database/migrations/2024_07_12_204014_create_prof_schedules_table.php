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
        Schema::create('prof_schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prof_id');
            $table->string('time_schedule');

            $table->foreign('prof_id')
                ->references('id')
                ->on('profs')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prof_schedules');
    }
};
