<?php

namespace App\Services;

use App\Services\Interfaces\ISocket;
use SocketIO;

class SocketEmitService implements ISocket
{
    private $redis;
    private $emitter;

    public function __construct()
    {
        $this->redis = new \Redis(); // Using the Redis extension provided client
        $this->redis->connect('redis.socket', '6379');
        $this->emitter = new SocketIO\Emitter($this->redis);
    }

    public function emit(string $eventName, string $data)
    {
        $this->emitter->broadcast->emit($eventName, $data);
    }
}
