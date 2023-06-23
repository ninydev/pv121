<?php

namespace App\Http\Controllers;

use App\Http\Requests\HelloControllerRequest;
use Illuminate\Http\Request;

class Pv121Controller extends Controller
{
    function helloController(Request $request){

        // Если я строю представление View на стороне сервера
        // то есть в результате работы моего бека должен быть html код
        // мне нужно воспользоваться шаблонизатоом
        // @link: https://laravel.su/docs/8.x/blade

        $data = [
          "userName" => "Oleksandr Nykytin",
          "hack" => "<script>alert('Hi')</script>",
          "iterator" => 10,
            "users" => [
                ['name' => 'Vasya'],
                ['name' => 'Masha']
            ]
        ];

        return view("pv121.hello", $data);

        // Строить код страницы внутри контроллера - плохо
        // return "<h1> Hello controller </h1>";
    }



    // Если я создал свой Request - я могу описать правила в нем
    // тогда валидация будет происходить автоматически
    // function helloController(HelloControllerRequest $request) {
    function helloController_Validator(Request $request) {

        // Если у меня нет своего класса запроса
        // то проверку я могу описать таким образом
        $validated = $request->validate([]);

        $validatedData = $request->validateWithBag('post', [
            'myVar' => ['required', 'max:255'],
        ]);

        // Подробнее про настройки валидации данных
        // @link: https://laravel.su/docs/8.x/validation

        // Правильное обращение к переменным в запросе
        // с помощью промежуточного класса Request
        $myVar = $request->input("myVar");
        return "<H1> Hello Controller: " . $myVar . " </H1>";

        // Недопустимо обращаться к магическим массивам внутри кода
        //return "<H1> Hello Controller: " . $_GET["myVar"] . " </H1>";
    }
}
