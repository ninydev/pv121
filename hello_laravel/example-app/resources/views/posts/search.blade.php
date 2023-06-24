<h1> Posts </h1>
<div> {{ $sql }}</div>
<form action="{{route('posts.search')}}" method="GET">
    <label>Title like <input type="text" name="search" value="{{$search}}"></label>
    <input type="submit">
</form>
<table>
    <thead>
    <tr>
        <th> <a href="{{route('posts.search')}}/?orderBy=id">id </a></th>
        <th> <a href="{{route('posts.search')}}/?orderBy=title"> title </a></th>
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
