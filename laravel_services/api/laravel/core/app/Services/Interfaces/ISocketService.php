<?php

namespace app\Services\Interfaces;

interface ISocketService
{
    /**
     * Отослать сообщение
     * @param object $eventBody
     * @param string $eventName
     */
    function emit(mixed $eventBody, string $eventName = 'message');

    /**
     * Отослать сообщение в конкретную комнату
     * @param  $eventBody
     * @param string $eventTo
     * @param string $eventName
     */
    function to(mixed $eventBody, string $eventTo, string $eventName = 'message');


}
