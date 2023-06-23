<?php

namespace App\Http\Controllers;

use App\Http\Requests\HelloControllerRequest;
use Illuminate\Http\Request;

class Pv121Controller extends Controller
{
    // Если я создал свой Request - я могу описать правила в нем
    // тогда валидация будет происходить автоматически
    // function helloController(HelloControllerRequest $request) {
    function helloController(Request $request) {

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
