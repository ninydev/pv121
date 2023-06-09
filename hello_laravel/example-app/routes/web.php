<?php

use App\Http\Controllers\Files\UploadFilesController;
use App\Http\Controllers\Post\UserPostController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Profile\UpdateAvatarController;
use App\Http\Controllers\SocketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/socket', [SocketController::class, 'index'])->name('socket.index');
    Route::get('/socket/emit', [SocketController::class, 'emit'])->name('socket.emit');

    // Админка для моих постов
    Route::resource('/profile/posts', UserPostController::class);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/profile/avatar', [UpdateAvatarController::class, 'store'])->name('profile.update.avatar');

    // Изучали загрузку файлов
    Route::get('/uploadFiles', [UploadFilesController::class, 'showForm'])->name('upload.files.show.form');
    Route::post('/uploadFiles', [UploadFilesController::class, 'saveFile'])->name('upload.files.save.file');


});

require __DIR__.'/auth.php';
