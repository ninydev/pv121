<?php

namespace App\Services;

use App\Models\Category;
use App\Presenters\RequestParamsPresenter;
use App\Services\Interfaces\ICategoryService;
use Illuminate\Support\Facades\Cache;

class CategoryService implements ICategoryService
{

    public function index(RequestParamsPresenter $params)
    {
        $cacheKey = 'categories.index.page' .
            $params->page . '.perPage.' . $params->perPage;

        $p = Cache::remember($cacheKey, 30, function ()
        use ($params) {
            return Category::paginate($params->perPage);
        });

        return $p;
    }
}
