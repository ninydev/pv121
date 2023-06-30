<?php

namespace App\Services\Interfaces;

use App\Presenters\RequestParamsPresenter;

interface ICachable
{
    /**
     * Метод, который возвращает коллекцию, разитую по страницам
     * @param RequestParamsPresenter $params
     * @return mixed
     */
    public function index(RequestParamsPresenter $params);
}
