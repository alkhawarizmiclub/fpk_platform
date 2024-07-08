<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Complaint;
use App\Models\Prof;
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

        Admin::create([
            'lastname' => 'admin',
            'firstname' => 'admin',
            'email' => 'admin123@gmail.com',
            'password' => bcrypt('password'),
            'birth_date' => '1998-05-09',
            'phone_number' => '1234567890',
            'gender' => 'male'

        ]);
                $prof = Prof::create([
            'lastname' => 'chifo',
            'firstname' => 'master',
            'email' => 'chifo@gmail.com',
            'password' => bcrypt('pandas'),
            'birth_date' => '1998-05-09',
            'phone_number' => '1234567890',
            'gender' => 'male'

        ]);
        ModuleService::ADD_MODULE($prof->id);
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

        $modules = [
            1 => ['semester' => 'S1'],
            2 => ['semester' => 'S1'],
            3 => ['semester' => 'S1'],
            4 => ['semester' => 'S1'],
            5 => ['semester' => 'S1'],
            6 => ['semester' => 'S1'],
            7 => ['semester' => 'S1'],
            8 => ['semester' => 'S2'],
            9 => ['semester' => 'S2'],
            10 => ['semester' => 'S2'],
            11 => ['semester' => 'S2'],
            12 => ['semester' => 'S2'],
            13 => ['semester' => 'S2'],
            14 => ['semester' => 'S2'],
        ];
        $student->modules()->attach($modules);
        Complaint::create([
            'type' => 'PFE : is problem',
        ]);




    }
}
