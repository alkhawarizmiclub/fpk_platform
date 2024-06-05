<?php

namespace Database\Seeders;

use App\Models\Admin;
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


    public function run(): void
    {
        ModuleService::ADD_MODULE();

        Admin::create([
            'lastname' => 'admin',
            'firstname' => 'admin',
            'email' => 'admin123@gmail.com',
            'password' => bcrypt('password'),
            'birth_date' => '1998-05-09',
            'phone_number' => '1234567890',
            'gender' => 'male'

        ]);
        $student = Student::create([
            'firstname' => 'test',
            'lastname' => 'test',
            'firstname_ar' => 'هشام',
            'lastname_ar' => 'شام',
            'birth_date' => '1998-05-09',
            'birth_place' => 'casablanca',
            'student_code' => '1234567890',
            'nationality' => 'moroccan',
            'num_identify'=>'q1323',
            'email'=>'test@mail.com',
            'phone_number' => '0612345678',
            'phone_urgent' => '0612345676',
            'address' => 'hay fath',
            'filiere' => 'SMI',
            'password' => bcrypt('motpass'),
            'gender' => 'male',
            'baccalaureat' => 'math',
            'releve_note' => 'note',
            'image_presonnal' => 'image',
            'identify_recto_verso' => 'identite',
            'inscription_date' => '2021-09-09',
        ]);
        $student->modules()->attach([
            ['module_id' => 1],
            ['module_id' => 2],
            ['module_id' => 3],
            ['module_id' => 4],
            ['module_id' => 5],
            ['module_id' => 6],
            ['module_id' => 7],
        ]);
    }
}
