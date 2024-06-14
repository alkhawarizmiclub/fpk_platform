<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;
    protected $table = 'module_student';
    protected $fillable = [
        'apogee',
        'module_id',
        'inscrit_number',
        'inscrit_year',
        'normale',
        'ratt'
    ];
}
