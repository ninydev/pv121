<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

class TestController extends Controller
{
    public function test() {
        // Storage::disk('minio')->put('avatars/1.txt', 'test');
        Storage::put('posts/1/test.txt', 'test');
        return env('MINIO_USER', 'Нет такой переменной');
    }

}
