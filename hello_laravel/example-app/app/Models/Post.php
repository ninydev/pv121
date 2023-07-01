<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// https://laravel.su/docs/8.x/eloquent
class Post extends Model
{
    // при необходимости - указываем имя таблицы
    //protected $table = 'some_table_name';

    public function categories() {
        return $this->belongsToMany(Category::class,
            'pivot_post_categories','post_id', 'category_id');
    }

    public function author() {
        return $this->belongsTo(User::class, 'author_id');
    }

}
