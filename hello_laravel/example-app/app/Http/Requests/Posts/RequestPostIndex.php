<?php

namespace App\Http\Requests\Posts;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Отвечает за допустимость значений в запросе.
 * Тут в методе rules мы опишем правила проверки входящего запроса
 * Таким образом - проверка будет осуществляться ДО запуска контролера
 */
class RequestPostIndex extends FormRequest
{
    /**
     * Описываю правила валидации входящих параметров
     * @return array
     */
    public function rules() : array {
        return [];
    }

}
