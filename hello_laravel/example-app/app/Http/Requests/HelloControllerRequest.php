<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HelloControllerRequest extends FormRequest
{

    /**
     * Я описываю правила для каждой переменной
     * @return string[]
     */
    public function rules() : array {
        return [
          'myVar' => 'required'
        ];

    }

}
