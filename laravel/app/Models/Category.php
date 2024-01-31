<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
    ];

    public static function boot()
    {
        parent::boot();

        static::saving(function ($category) {
            $category->title = Str::lower($category->title);
            $category->slug = Str::slug($category->title);
        });
    }
}
