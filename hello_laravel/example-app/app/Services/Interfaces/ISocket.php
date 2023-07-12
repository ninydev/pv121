<?php

namespace App\Services\Interfaces;

interface ISocket
{
    public function emit(string $eventName, string $data);
}
