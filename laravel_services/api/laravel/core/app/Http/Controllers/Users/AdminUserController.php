<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{

    /**
     * Получить весь список пользователей на сайте
     *
     */
    public function index(Request $request) {
        return User::all();
    }

}
