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
     * @param string $eventRoom
     * @param string $eventName
     */
    function to(mixed $eventBody, string $eventRoom, string $eventName = 'message');

    function toUser(mixed $eventBody, string $userId, string $eventName = 'message');


}
