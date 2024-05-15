<?php

namespace Database\Seeders;

use App\Models\Module;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Services\ModuleService;
use App\Models\Student;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

    // M01- Analyse 1 – Suites Numériques et Fonctions
    // M02- ALGEBRE 1- Généralités et Arithmétique dans Z
    // M03- ALGEBRE 2- Structures, Polynômes et Fractions Rationnelles
    // M04- Physique 1 – Mécanique 1
    // M05- Physique 2 – Thermodynamique
    // M06- Informatique 1 – Introduction à l’informatique
    // M07- LT I
    public function run(): void
    {
        // User::factory(10)->create();
        ModuleService::ADD_MODULE();
        $students = Student::factory(10)->create();
        foreach($students as $student){
            $student->modules()->attach([1, 2, 3, 4, 5, 6, 7]);
        }

    }
}
