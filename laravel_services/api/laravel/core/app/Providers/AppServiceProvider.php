<?php

namespace App\Providers;

use App\Services\Interfaces\ISocketService;
use App\Services\SocketService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Регистрируем сервис для сообщений сокета
        $this->app->bind(ISocketService::class, SocketService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
