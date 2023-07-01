<?php

namespace App\Http\Requests\Posts;

use Illuminate\Foundation\Http\FormRequest;

class RequestPostStore  extends FormRequest
{
    public function rules() : array {
        return [
            'title' => ['required', 'string', 'min:5'],
            'body' =>  ['required', 'string', 'min:5']
        ];
    }
}
