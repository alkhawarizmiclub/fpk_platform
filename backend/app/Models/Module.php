<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Module extends Model
{
    use HasFactory, Notifiable;
    public $timestamps = true;

    protected $fillable = [
        'module_name',
        'filiere',
        'prof_id',
        'semester'
    ];
    public function students()
    {
        return $this->belongsToMany(Student::class, 'result', 'module_id',  'apogee');
    }
}
