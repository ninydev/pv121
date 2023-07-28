<?php

namespace App\Http\Controllers\Jobs;

use App\Http\Controllers\Controller;
use App\Jobs\ParseDBJob;

class ParseDBJobController  extends Controller
{
    public function startJob() {
        $jobId = "jobId";

        $job = ParseDBJob::dispatch($jobId, "Hello Job");

        return json_encode($jobId);


    }

}
