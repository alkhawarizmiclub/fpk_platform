<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaints extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'is_active'
    ];
    // protected $updateble = [
    //     'type',
    //     'is_active'
    // ];
    protected $table = 'complaints';
    public $timestamps = true;
}
