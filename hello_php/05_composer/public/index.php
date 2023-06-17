<?php
/**
 * Через этот файл будут проходить все мои запросы
 */

// Подключу средство для автозагрузки классов
use Keeper\Controllers\HomeController;

require_once ("../vendor/autoload.php");

/**
 * Прототип роутера
 */

var_dump($_GET);

$c = null;

switch ($_GET['controller']) {
    case 'home':
        $c = new HomeController();
        break;
    default:
        $c = new HomeController();
}

switch ($_GET['method']) {
    case 'showHome':
        $c->showHome();
        break;
    case 'showAbout':
        $c->showAbout();
        break;
    default:
        $c->showHome();
}



