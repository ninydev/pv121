<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

/**
 * Этот контроллер будет только читать данные по посту
 * все его методы открыты для всех
 */
class ReadPostController extends Controller
{
    public function index(Request $request)
    {
        $userPosts = Post::query()
            ->with('author')
            ->with('likes')
            ->with('like_count')
            ->orderByDesc("updated_at")
            ->paginate($request->input('perPage', 10));

        return $userPosts;
    }

}
