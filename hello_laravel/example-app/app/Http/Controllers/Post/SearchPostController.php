<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;


class SearchPostController extends Controller
{
    public function search(Request $request) {
        $builder = Post::query();

        $builder->orderBy($request->input('orderBy', 'id'));

        $search = $request->input('search') ;

        if($search!= null) {
            $builder->where('title', 'LIKE', '%' . $search . '%');
        }

        $sql = $builder->toSql();
        $p = $builder->get();

        return view('posts.search', [
            'search' => $search,
            'posts' => $p,
            'sql' => $sql
        ]);
    }
}
