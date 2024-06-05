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
        'year',
    ];
    protected $table = 'final_results';
}
