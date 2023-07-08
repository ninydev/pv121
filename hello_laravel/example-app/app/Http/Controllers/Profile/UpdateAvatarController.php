<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\RequestAvatarUpdate;
use App\Jobs\TestJob;
use App\Mail\MailInfo;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class UpdateAvatarController extends Controller
{
    public function store(RequestAvatarUpdate $request){
        if (! $request->hasFile('avatar')) {
            return Redirect::route('profile.edit');
        }

        $fileNewAvatar = $request->file('avatar');
        $user = $request->user();

        $path = "/storage/" . $fileNewAvatar->storePublicly(
            'avatars/' . $user->id ."/" . date("Y-m-d"),
            'public');

        if( !is_null($user->avatar)) {
            $fileOldAvatar = "public/" . str_replace("/storage/", "", $user->avatar);
            Storage::delete($fileOldAvatar);
        }

//        $bucket = 'storage';
//        if (!Storage::disk('minio')->exists($bucket)) {
//            Storage::disk('minio')->makeDirectory($bucket);
//        }
//
//
//        Storage::disk('minio')->put(
//            'avatars/' . $user->id ."/" . date("Y-m-d") ,
//            $fileNewAvatar);


        $user->avatar = $path;
        $user->save();

//        Mail::mailer()
//            ->to($user)
//            ->send(new MailInfo());

        $job = TestJob::dispatch(); // ->delay(now()->addMinutes(10));
        $job = TestJob::dispatch()->delay(now()->addMinutes(1));
        $job = TestJob::dispatch()->delay(now()->addMinutes(2));


        return Redirect::route('profile.edit');
    }

}
