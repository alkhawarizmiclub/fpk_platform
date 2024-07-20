<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Prof extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $table = 'profs';
    protected $guard = 'prof';

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'phone_number',
        'gender',
        'birth_date',
    ];


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
        return $this->hasMany(Module::class, 'prof_id', 'id');
    }

    public function announcements()
    {
        return $this->morphMany(Announcement::class, 'author');
    }


}
