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
        Schema::create('module_student', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger("apogee");
            $table->unsignedBiginteger('module_id');
            $table->foreign('apogee')->references('apogee')
                ->on('students')->onDelete('cascade');
            $table->foreign('module_id')->references('id')
                ->on('modules')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('module_stdudent');
    }
};
