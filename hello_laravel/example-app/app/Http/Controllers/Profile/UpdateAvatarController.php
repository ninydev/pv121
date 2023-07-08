<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\RequestAvatarUpdate;
use App\Mail\MailInfo;
use App\Models\User;
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


        $user->avatar = $path;
        $user->save();

        Mail::mailer()
            ->to($user)
            ->send(new MailInfo());


        return Redirect::route('profile.edit');
    }

}
