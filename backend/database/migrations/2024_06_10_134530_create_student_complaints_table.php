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
        Schema::create('student_complaints', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('apogee');
            $table->unsignedBigInteger('complaint_id');
            $table->text('description');
            $table->boolean('is_resolved')->default(false);


            $table->foreign('apogee')
                ->references('apogee')
                ->on('students')->onDelete('cascade');


            $table->foreign('complaint_id')
                ->references('id')
                ->on('complaints')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_complaints');
    }
};
