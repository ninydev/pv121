<?php

namespace App\Services\Interfaces;

use App\Presenters\RequestParamsPresenter;

interface IPostService
{
    public function index(RequestParamsPresenter $params);
}
