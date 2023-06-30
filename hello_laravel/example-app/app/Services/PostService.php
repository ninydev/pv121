<?php

namespace App\Services;

use App\Models\Post;
use App\Presenters\RequestParamsPresenter;
use App\Services\Interfaces\IPostService;
use Illuminate\Support\Facades\Cache;

class PostService implements IPostService
{

    public function index(RequestParamsPresenter $params){
        return Post::with('categories')->paginate($params->perPage);
    }

//    public function index(RequestParamsPresenter $params)
//    {
//        $cacheKey = 'post.index.page' .
//            $params->page .'.perPage.' . $params->perPage;
//
//        $p = Cache::remember($cacheKey, 30, function ()
//        use ($params) {
//            return Post::paginate($params->perPage);
//        });
//
//        return $p;
//    }
}
