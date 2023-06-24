<h1> Posts </h1>
<div> {{ $sql }}</div>
<form action="{{route('posts.search')}}" method="GET">
    <label>Title like <input type="text" name="search" value="{{$search}}"></label>
    <input type="submit">

<table>
    <thead>
    <tr>
        <th><input type="radio" name="orderBy" value="id">Id</th>
        <th><input type="radio" name="orderBy" value="title">Title</th>
{{--        <th> <a href="{{route('posts.search')}}/?orderBy=id">id </a></th>--}}
{{--        <th> <a href="{{route('posts.search')}}/?orderBy=title"> title </a></th>--}}
    </tr>
    </thead>
    <tbody>
    @foreach($posts as $post)
        <tr>
            <td>{{$post->getAttribute('id')}}</td>
            <td>{{$post->getAttribute('title')}}</td>
        </tr>
    @endforeach
    </tbody>
</table>

</form>
