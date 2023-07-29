<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Models\Like;
use App\Services\Interfaces\ISocketService;
use Illuminate\Support\Facades\Log;

/**
 * Этот контроллер будет работать с изменениями поста
 * все его методы прикрыты auth
 */
class PostLikesController extends Controller
{
    public function __construct(private ISocketService $socketService)
    {
    }

    public function like($postId) {
        $like = new Like();
        $like->setAttribute('post_id', $postId);
        // Тут будем брать Юзверя и проверять - есть что дописать
        $like->setAttribute('user_id', uuid_create());
        $like->save();

        $roomName = 'post.updates.' . $postId;
        $eventName = 'post.update.likes.' . $postId;

        $newCount = Like::query()
            ->where('post_id', '=', $postId)
            ->count('*');

        $this->socketService->to($newCount, $roomName, $eventName);

        Log::debug($roomName);
        Log::debug($eventName);

        // return response()->status(204);
    }

}
