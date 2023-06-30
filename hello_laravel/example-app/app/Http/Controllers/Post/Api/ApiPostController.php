<?php

namespace App\Http\Controllers\Post\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Presenters\RequestParamsPresenter;
use App\Services\Interfaces\IPostService;
use App\Services\PostService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, IPostService $service)
    {
        $params = new RequestParamsPresenter($request);

        $p = $service->index($params);

        return $p;
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

        $p = Post::with('categories')->find($id);


        // Если в модели описаны принципы отношений - писать запросы самому нет необходимости
//        $c = DB::table('pivot_post_categories')
//            ->where('post_id', '=', $id)
//            ->join('categories', 'categories.id', '=', 'pivot_post_categories.category_id')
//            ->get();

        return $p;
        // return $p->categories()->get();
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
