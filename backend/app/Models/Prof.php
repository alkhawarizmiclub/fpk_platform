<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Prof extends Model
{
    use HasFactory, Notifiable;


    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'phone_number',
        'gender',
        'birth_date',
    ];
    protected $table = 'profs';
    public function modules()
    {
        return $this->hasMany(Module::class);
    }
}
