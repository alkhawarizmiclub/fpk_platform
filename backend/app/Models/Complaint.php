<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'is_active'
    ];

    // protected $table = 'student_complaints';
    public $timestamps = true;

    public function students()
    {
        return $this->belongsToMany(Student::class, 'student_complaints', 'complaint_id', 'apogee')->withTimestamps();
    }
}
