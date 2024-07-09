<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Complaint;
use App\Models\Prof;
use Illuminate\Database\Seeder;
use App\Services\ModuleService;
use App\Models\Student;
use App\Services\StudentService;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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

        $prof1 = Prof::create([
            'lastname' => 'python',
            'firstname' => 'achraf',
            'email' => 'django@gmail.com',
            'password' => bcrypt('pandas'),
            'birth_date' => '1998-05-09',
            'phone_number' => '1234567890',
            'gender' => 'male'

        ]);

        $prof2 = Prof::create([
            'lastname' => '3alah',
            'firstname' => 'nawfal',
            'email' => '3alah@gmail.com',
            'password' => bcrypt('pandas'),
            'birth_date' => '1998-05-09',
            'phone_number' => '1234567890',
            'gender' => 'male'

        ]);





        Complaint::create([
            'type' => 'PFE : is problem',
        ]);

    $currentTimestamp = Carbon::now();
        db::table('filieres')
            ->insert(
                [
                    [
                        'filiere_name' => 'sciences mathématiques et informatique',
                        'filiere_code' => 'SMI',
                        'created_at' => $currentTimestamp,
                        'updated_at' => $currentTimestamp
                    ],
                    [
                        'filiere_name' => 'sciences économiques et gestion',
                        'filiere_code' => 'SEG',
                        'created_at' => $currentTimestamp,
                        'updated_at' => $currentTimestamp
                    ],
                    [
                        'filiere_name' => 'sciences de de la matière physique',
                        'filiere_code' => 'SMP',
                        'created_at' => $currentTimestamp,
                        'updated_at' => $currentTimestamp

                    ]
                ]
            );
        ModuleService::SMI($prof->id);
        // ModuleService::SEG($prof1->id);
        // ModuleService::SMP($prof2->id);

        $student = Student::create([
            'firstname' => 'test',
            'lastname' => 'test',
            'firstname_ar' => 'هشام',
            'lastname_ar' => 'شام',
            'birth_date' => '1998-05-09',
            'birth_place' => 'casablanca',
            'student_code' => '1234567890',
            'nationality' => 'moroccan',
            'id_num'=>'q1323',
            'email'=>'test@mail.com',
            'phone' => '0612345678',
            'emergencyPhone' => '0612345676',
            'address' => 'hay fath',
            'filiere_id' => 1,
            'password' => bcrypt('motpass'),
            'gender' => 'male',
            'baccalaureat' => 'math',
            'releve_note' => 'note',
            'image_presonnal' => 'image',
            'identify_recto_verso' => 'identite',
        ]);

        StudentService::setDefaultModules($student);
    }

}
