<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class ApiPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Post::all();
    }

    /**
     * Store a newly created resource in storage.
     * https://laravel.su/docs/8.x/eloquent#inserting-and-updating-models
     */
    public function store(Request $request)
    {
        $p = new Post();
        $p->setAttribute('title', $request->input('title'));
        $p->setAttribute('slug', $request->input('slug'));
        $p->setAttribute('body', $request->input('body'));
        $p->setAttribute('img_url', $request->input('img_url'));

        // тут нужно использовать try - catch - что бы анализировать ошибку
        $p->save();

        return $p;
    }

    /**
     * Display the specified resource.
     * https://laravel.su/docs/8.x/eloquent#retrieving-single-models
     */
    public function show(int $id)
    {
        // ищет по id
        return Post::findOrFail($id);
        // return Post::query()->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $p = Post::find($id);

        $p->setAttribute('title', $request->input('title'));
        $p->setAttribute('slug', $request->input('slug'));
        $p->setAttribute('body', $request->input('body'));
        $p->setAttribute('img_url', $request->input('img_url'));

        $p->save();

        return $p;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        Post::find($id)->delete();
        return [];
    }
}
