<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

// https://laravel.su/docs/8.x/controllers
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     * https://laravel.su/docs/8.x/collections
     */
    public function index()
    {
        // Из модели я получаю коллекцию
        // а потом сортирую саму полученную коллекцию
//        $p = Post::all()->sortBy('body');
//        $p = Post::all()->filter(function ($post) {
//            return strpos($post->title, 'About') !== false;
//        });

//        $p = Post::where('title', 'LIKE', '%About%')
//            ->get()
//            ->filter(function ($post) {
//                return strpos($post->title, 'As') !== false;
//            });

//        $p = Post::query()
//            ->where('title', 'LIKE', '%About%')
//            ->where('title', 'LIKE', '%As%')
//            ->get();

        $builder = Post::query();

        $builder->where('title', 'LIKE', '%About%');
        $builder->where('title', 'LIKE', '%As%');

        $builder->orderBy('title');

        $sql = $builder->toSql();
        $p = $builder->get();

        return view('posts.index', [
            'posts' => $p,
            'sql' => $sql
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        return Post::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}