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
            'gender' => 'male',
            'birth_place' => 'casablanca',
            'nationality' => 'Marocain',
            'id_num' => 'q1323',
            'emergency_phone' => '0612345676',
            'address' => 'hay fath',
        ]);

        $prof1 = Prof::create([
            'lastname' => 'python',
            'firstname' => 'achraf',
            'email' => 'django@gmail.com',
            'password' => bcrypt('pandas'),
            'birth_date' => '1998-05-09',
            'phone_number' => '1234567891',
            'gender' => 'male',
            'birth_place' => 'casablanca',
            'nationality' => 'Marocain',
            'id_num' => 'q1323',
            'emergency_phone' => '0612345676',
            'address' => 'hay fath',

        ]);

        $prof2 = Prof::create([
            'lastname' => '3alah',
            'firstname' => 'nawfal',
            'email' => '3alah@gmail.com',
            'password' => bcrypt('pandas'),
            'birth_date' => '1998-05-09',
            'phone_number' => '0612345676',
            'gender' => 'male',
            'birth_place' => 'casablanca',
            'nationality' => 'Marocain',
            'id_num' => 'q1323',
            'emergency_phone' => '0612345676',
            'address' => 'hay fath',

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
            'massar_code' => '1234567890',
            'nationality' => 'moroccan',
            'id_num' => 'q1323',
            'email' => 'test@mail.com',
            'phone_number' => '0612345678',
            'emergency_phone' => '0612345676',
            'address' => 'hay fath',
            'filiere_id' => 1,
            'password' => bcrypt('motpass'),
            'gender' => 'male',
            'baccalaureat' => 'math',
            'releve_note' => 'note',
            'student_photo' => 'image',
            'identify_recto_verso' => 'identite',
        ]);

        StudentService::setDefaultModules($student);
        // DB::table('final_results')->insert([
        //     'student_id' => $student->id,
        //     'result' => 12.5,
        //     'created_at' => $currentTimestamp,
        //     'updated_at' => $currentTimestamp
        // ]);
        DB::table('filiere_schedules')->insert(
            [
                [
                    'filiere_id' => 1,
                    'time_schedule' => 'time_schedule/smi.pdf',
                    'exam_schedule' => 'exam_schedule/smi.pdf',
                    'created_at' => $currentTimestamp,
                    'updated_at' => $currentTimestamp
                ],

                [
                    'filiere_id' => 2,
                    'time_schedule' => 'time_schedule/seg.pdf',
                    'exam_schedule' => 'exam_schedule/seg.pdf',
                    'created_at' => $currentTimestamp,
                    'updated_at' => $currentTimestamp
                ],
                [
                    'filiere_id' => 3,
                    'time_schedule' => 'time_schedule/smp.pdf',
                    'exam_schedule' => 'exam_schedule/smp.pdf',
                    'created_at' => $currentTimestamp,
                    'updated_at' => $currentTimestamp
                ],
            ]
        );
    }
}
