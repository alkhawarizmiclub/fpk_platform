<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Complaint;

class Student extends Authenticatable
{

    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'firstname',
        'lastname',
        'firstname_ar',
        'lastname_ar',
        'birth_date',
        'birth_place',
        'massar_code',
        'nationality',
        'id_num',
        'email',
        'phone_number',
        'emergency_phone',
        'address',
        'filiere_id',
        'password',
        'gender',
        'baccalaureat',
        'releve_note',
        'student_photo',
        'identify_recto_verso',
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

    public function results()
    {
        return $this->hasMany(FinalResult::class, 'apogee');
    }

    public function complaints()
    {
        return $this->belongsToMany(Complaint::class, 'student_complaints', 'apogee', 'complaint_id')->withPivot(['description', 'id'])->withTimestamps();
    }
}
