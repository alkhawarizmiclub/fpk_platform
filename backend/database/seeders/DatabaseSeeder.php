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
            'lastname' => 'master',
            'firstname' => 'shifu',
            'email' => 'shifu@gmail.com',
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
            'lastname' => 'django',
            'firstname' => 'achraf',
            'email' => 'django@gmail.com',
            'password' => bcrypt('yousuck'),
            'birth_date' => '1998-05-09',
            'phone_number' => '1234567891',
            'gender' => 'male',
            'birth_place' => 'wad zam',
            'nationality' => 'Marocain',
            'id_num' => 'q1323',
            'emergency_phone' => '0612345676',
            'address' => 'hay fath',

        ]);

        $prof2 = Prof::create([
            'lastname' => '3alah',
            'firstname' => 'nawfal',
            'email' => '3alah@gmail.com',
            'password' => bcrypt('pooler'),
            'birth_date' => '1998-05-09',
            'phone_number' => '0612345676',
            'gender' => 'male',
            'birth_place' => 'casablanca',
            'nationality' => 'Marocain',
            'id_num' => 'q1323',
            'emergency_phone' => '0612345676',
            'address' => 'hay fath',

        ]);







        DB::table('complaints')
            ->insert(
                [
                    [
                        'type' => 'remarquez le module PFE manquant',
                    ],
                    [
                        'type' => 'il manque quelques modules',
                    ],
                    [
                        'type' => 'Reclamation de bourses',
                    ]
                ]
            );

        $currentTimestamp = Carbon::now();
        db::table('filieres')
            ->insert(
                [
                    [
                        'filiere_name' => 'Sciences mathématiques et informatique',
                        'filiere_abrv' => 'SMI',
                        'created_at' => $currentTimestamp,
                        'updated_at' => $currentTimestamp
                    ],
                    [
                        'filiere_name' => 'Sciences économiques et gestion',
                        'filiere_abrv' => 'SEG',
                        'created_at' => $currentTimestamp,
                        'updated_at' => $currentTimestamp
                    ],
                    [
                        'filiere_name' => 'Sciences de de la matière physique',
                        'filiere_abrv' => 'SMP',
                        'created_at' => $currentTimestamp,
                        'updated_at' => $currentTimestamp

                    ]
                ]
            );
        // ModuleService::SMI($prof->id, $prof1->id, $prof2->id);
        // ModuleService::SEG($prof->id, $prof1->id, $prof2->id);
        // ModuleService::SMP($prof->id, $prof1->id, $prof2->id);




        ModuleService::gnModule();

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
        DB::table('prof_schedules')->insert(
            [
                [
                    'prof_id' => $prof->id,
                    'time_schedule' => 'time_schedule/prof1.pdf',
                    'exam_schedule' => 'time_schedule/prof1.pdf',
                    'created_at' => $currentTimestamp,
                    'updated_at' => $currentTimestamp
                ],
                [
                    'prof_id' => $prof1->id,
                    'time_schedule' => 'time_schedule/prof2.pdf',
                    'exam_schedule' => 'time_schedule/prof2.pdf',
                    'created_at' => $currentTimestamp,
                    'updated_at' => $currentTimestamp
                ],
                [
                    'prof_id' => $prof2->id,
                    'time_schedule' => 'time_schedule/prof3.pdf',
                    'exam_schedule' => 'time_schedule/prof3.pdf',
                    'created_at' => $currentTimestamp,
                    'updated_at' => $currentTimestamp
                ],
            ]
        );
    }

}
