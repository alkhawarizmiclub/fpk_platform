<?php

use App\Services\StudentService;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// write by ai encadrant par moi


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('result', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger("apogee");
            $table->unsignedBiginteger('module_id');
            $table->integer('inscrit_number')->default(1);
            $table->string('inscrit_year')->default(StudentService::getAcademicYear(date('Y-m-d')));
            $table->string('semester');
            $table->decimal('normale', 6, 4)->nullable();
            $table->decimal('ratt', 6, 4)->nullable();

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
