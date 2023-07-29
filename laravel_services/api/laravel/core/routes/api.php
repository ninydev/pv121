<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Users\AdminUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::get('admin/users', [AdminUserController::class, 'index'])->name('api.admin.users.index');

Route::get('test', [\App\Http\Controllers\TestController::class,'test'])->name('test');

Route::get('job', [\App\Http\Controllers\Jobs\ParseDBJobController::class,'startJob'])->name('startJob');

Route::get('posts/read', [\App\Http\Controllers\Posts\ReadPostController::class, 'index'])->name('post.read.all');

Route::get('post/like/{postId}', [\App\Http\Controllers\Posts\PostLikesController::class,'like'])->name('post.like');
