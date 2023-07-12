<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SocketController extends Controller
{
    function index(){
        return Inertia::render('Socket');
    }

}
