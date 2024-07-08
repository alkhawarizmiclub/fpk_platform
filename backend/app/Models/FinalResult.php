<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinalResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'apogee',
        'module_id',
        'note',
        'session',
        'semester',
        'year',
    ];
    protected $table = 'final_results';
}
