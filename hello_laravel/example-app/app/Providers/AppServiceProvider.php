<?php

namespace App\Providers;

use App\Decorators\CacheDecorator;
use App\Http\Controllers\Post\PostController;
use App\Services\Interfaces\IPostService;
use App\Services\PostService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Простая DI зависимость
        // $this->app->bind(IPostService::class, PostService::class);

        // Оборачиваем контроллер в декоратор - для того, что бы получить единый способ кеширования
        $this->app->bind(PostController::class, function () {
            return new PostController(
                new CacheDecorator( $this->app->make(PostService::class), "Posts"));
        });

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
