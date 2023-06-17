<?php

namespace Keeper\Controllers;

class HomeController
{
    public function __construct()
    {
        echo " Создан контроллер";
    }

    public function showHome() {
        echo "Главная страница";
    }

    public function showAbout(){
        echo "Страница обо мне";
    }

}
