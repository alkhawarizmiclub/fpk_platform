<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Student extends Model
{


    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'phone_number',
        'gender',
        'birth_date',
    ];
    protected $table = 'students';
    protected $primaryKey = 'apogee';
    public $incrementing = true;
    public $timestamps = true;

    protected $guard = 'student';

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function modules()
    {
        return $this->belongsToMany(Module::class, 'module_student', 'apogee', 'module_id');
    }
}
