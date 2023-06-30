<?php

namespace App\Services\Interfaces;

use App\Presenters\RequestParamsPresenter;

interface ICategoryService extends ICachable
{
    public function index(RequestParamsPresenter $params);
}
