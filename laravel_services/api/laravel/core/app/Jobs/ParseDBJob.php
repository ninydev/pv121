<?php

namespace App\Jobs;

use App\Mail\ParseDB\MailParseDBJobSuccess;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ParseDBJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @param string $jobId - уникальный id задания
     * @param string $someVal - некие данные, которые я хочу передать в задание
     */
    public function __construct(
        private string $jobId,
        private string $someVal)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Вот тут что то происходит
        // КАК сообщать из фона о том, что тут не так?
        Log::debug($this->jobId . " : " . $this->someVal);

        // Можно отправить письмо ???
        // Mail::to('oleksandr.nykytin@tech.lab325.com')->send(new MailParseDBJobSuccess());



    }
}
