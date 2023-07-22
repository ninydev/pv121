<?php

namespace App\Services;

use App\Services\Interfaces\ISocketService;
use SocketIO;

class SocketService implements ISocketService
{

    protected $redis;
    protected $emitter;

    public function __construct()
    {
        $this->redis = new \Redis(); // Using the Redis extension provided client
        $this->redis->connect(env('REDIS_SOCKET_HOST', 'redis.socket'), env('REDIS_SOCKET_PORT', 6379));
        $this->emitter = new SocketIO\Emitter($this->redis);
    }


    function emit(mixed $eventBody, string $eventName = 'message')
    {
        $this->emitter->emit($eventName, json_encode($eventBody));
    }

    function to(mixed $eventBody, string $eventTo, string $eventName = 'message')
    {
        $this->emitter->to($eventTo)->emit($eventName, json_encode($eventBody));
    }
}
