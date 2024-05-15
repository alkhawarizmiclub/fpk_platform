<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // use HasApiTokens, HasFactory, Notifiable;

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
    public function modules()
    {
        return $this->belongsToMany(Module::class, 'module_student', 'apogee', 'module_id');
    }
}
