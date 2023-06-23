
<h1>Hello from blade </h1>
<p> при выводе информации - ключ массива перевоплощается в имя переменной:
{{ $userName }}
</p>
<p>попытка взлома {{ $hack }}</p>

@if($iterator < 5)
    <p>меньше 5</p>
@else
    <p> больше 5</p>
@endif

<ul>
@foreach($users as $user)
    <li>{{$user['name']}}</li>
@endforeach
</ul>


<ul>
@for($i = 0; $i < $iterator; $i++)
    <li>{{ $i  }}</li>
@endfor
</ul>
<p>The current UNIX timestamp is {{ time() }}.</p>
<p>The current date {{ date("d/m/Y H:i:s") }}.</p>

