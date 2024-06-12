<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentComplaint extends Model
{
    use HasFactory;
    protected $fillable = ['apogee', 'complaint_id', 'message', 'updated_at', 'created_at'];
    protected $table = 'student_complaints';
}
