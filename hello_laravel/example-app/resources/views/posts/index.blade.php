
@isset($sql)
<div> {{ $sql }}</div>
@endisset

<ul>
    @foreach($posts as $post)
        <li>{{$post->getAttribute('id')}} {{$post->getAttribute('title')}}</li>
    @endforeach
</ul>


{{ $posts->links() }}

