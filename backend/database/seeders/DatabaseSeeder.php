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


    }
}
