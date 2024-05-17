<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'thumbnail_path',
        'tags',
        'content',
        'poster_image_path',
    ];
    public function author()
    {
        return $this->morphTo();
    }
}
