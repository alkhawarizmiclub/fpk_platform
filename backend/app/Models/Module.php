<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    public $timestamps = true;

    public function students()
    {
        return $this->belongsToMany(Student::class, 'module_student', 'module_id',  'apogee');
    }
}
