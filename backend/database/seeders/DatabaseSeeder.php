<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Complaint;
use App\Models\Prof;
use Illuminate\Database\Seeder;
use App\Services\ModuleService;
use App\Models\Student;
use Illuminate\Support\Facades\DB;

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



        Complaint::create([
            'type' => 'PFE : is problem',
        ]);
        DB::table('filiers');



    }
}
