<?php

namespace App\Decorators;

use App\Models\Post;
use App\Presenters\RequestParamsPresenter;
use App\Services\Interfaces\ICachable;
use Illuminate\Support\Facades\Cache;

class CacheDecorator implements ICachable
{
    private string $cacheKey;
    private ICachable $service;

    /**
     * При создании декоратора нам обязательно нужно получить
     * Сервис - который мы собираемся обернуть в декоратор
     * И ключ - с которым мы будем хранить данные в кеше
     * @param ICachable $service
     * @param string $cacheKey
     */
    public function __construct (ICachable $service, string $cacheKey) {
        $this->service = $service;
        $this->cacheKey = $cacheKey;
    }

    /**
     * Любое обращение к сервису сначала посмотрит в кеш,
     * и только потом, при необходимости, передаст управление в базу
     * @param RequestParamsPresenter $params
     * @return mixed
     */
    public function index(RequestParamsPresenter $params)
    {
        $cacheKey = $this->cacheKey .
            $params->page .'.perPage.' . $params->perPage;

        $p = Cache::remember($cacheKey, 30, function ()
        use ($params) {
            return $this->service->index($params);
        });

        return $p;
    }

}
