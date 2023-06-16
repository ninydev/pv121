<?php

class Person
{
    public function __construct() {
        $this->firstName = 'Oleksandr';
        $this->secondName = 'Nykytin';
        $this->age = 46;
    }

    // Конструктор с параметрами
//    public function __construct($name, $age) {
//        $this->firstName = $name;
//        $this->age = $age;
//    }

    public $firstName;
    public $secondName;

    private $age;

    public function __get(string $name) : mixed
    {
        if (isset($this->someVars[$name]))
            return $this->someVars[$name];
        return $name . " не определено";
    }

    private $someVars = [];

    public function __set(string $name, $val) : void
    {
        $this->someVars[$name] = $val;
    }

    public function __call(string $name, array $arguments)
    {
        echo "method ". $name . " не определен";
    }

    public function __toString(): string
    {
        return "Hello ";
    }
}
