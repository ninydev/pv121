<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\Posts\RequestPostStore;
use App\Models\Post;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // $userPosts = User::find($request->user()->id)->posts()->get();
        $userPosts = Post::query()
            ->where('author_id', '=', $request->user()->id)
            ->orderByDesc("updated_at")
            ->paginate($request->input('perPage', 10));

        return Inertia::render('Profile/Posts/Index', [
            'posts' => $userPosts
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Profile/Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestPostStore $request)
    {
        $newPost = new Post();
        $newPost->setAttribute('title', $request->input('title'));
        $newPost->setAttribute('body', $request->input('body'));
        $newPost->setAttribute('author_id', $request->user()->id);
        $newPost->setAttribute('slug', Str::slug($request->input('title') . '_' . date('Yd-m-Y-H-i-s')));

        $newPost->save();

        return Redirect::route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $id, Request $request)
    {
        $editPost = Post::find($id);
        if($editPost->getAttribute('author_id') != $request->user()->id) {
            abort(403);
        }

        return Inertia::render('Profile/Posts/Edit', [
            'post' => $editPost
        ]);


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RequestPostStore $request, int $id)
    {
        $editPost = Post::find($id);
        $editPost->setAttribute('title', $request->input('title'));
        $editPost->setAttribute('body', $request->input('body'));

        $editPost->save();

        return Redirect::route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
