<?php

use Models\User;

spl_autoload_register(function ($class_name) {

    $file = __DIR__ . "/src/" . str_replace('\\', DIRECTORY_SEPARATOR, $class_name).'.php';
    echo "Программист хочет создать <b>" . $class_name . "</b> из <i>" .$file . "</i><br>";
    if (file_exists($file)) {
        require $file;
        return true;
    }
    return false;
});


$u = new User();
//$u = new Models\User();



//spl_autoload_register(function ($class_name) {
//    echo "Программист хочет создать экземпляр класса " . $class_name . "<br>";
//    require_once ("src/" . $class_name . ".php");
//});

// Зачем мне каждый раз проверять и включать описание класса
// если он мне нужен только тогда, когда я создаю экземпляр класса
// Я поручу этот процесс spl_autoload_register
// require_once ("src/SomeClass.php");

//$s = new SomeClass();
//$o = new OtherClass();

