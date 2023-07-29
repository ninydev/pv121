<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory, Uuids;

    public function author() {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function like_count(){
        return $this->hasMany(Like::class, 'post_id', 'id')
            ->selectRaw('post_id, count(*) as count_likes')->groupBy('post_id');
    }

    public function likes(){
        return $this->hasMany(Like::class, 'post_id', 'id')
            // ->with('user') // Даже возвращать их с пользователями
            ->limit(3);
    }
}
