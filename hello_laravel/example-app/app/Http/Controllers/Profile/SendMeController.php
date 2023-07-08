<?php

namespace App\Http\Controllers\Profile;

use App\Mail\MailInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class SendMeController
{
    public function testMail(Request $request) {
        $user = $request->user();
        Mail::mailer()
            ->to($user)
            ->send(new MailInfo());

        return Redirect::route('profile.edit');
    }

}
