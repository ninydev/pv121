<?php

namespace App\Presenters;

use Illuminate\Http\Request;

/**
 * Задача этого класса - подготовить данные для запроса
 */
class RequestParamsPresenter
{
    protected array $params;

    public function __construct(Request $request){
        $this->params = [
            'perPage' => $request->input('perPage', 1),
            'page' => $request->input('page', 1)
        ];
    }

    public function __set(string $name, $value): void
    {
        $this->params[$name] = $value;
    }

    public function __get(string $name)
    {
        if(isset($this->params[$name])) {
            return $this->params[$name];
        } else {
            return null;
        }
    }

}
