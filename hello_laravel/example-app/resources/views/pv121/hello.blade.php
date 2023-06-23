@extends("layouts.main")

{{--Опишу чать - которую я буду передавать в заголовок страницы--}}
@section('title', 'Page Title')

@section('sidebar')
    @parent
    <h1>Hello from blade </h1>
    <p>Эта часть попадает в секцию .</p>
@endsection

@section('content')
    <p>Эта часть будет внутри главной - там где аналог RenderBody .</p>
@endsection

{{--При использовании мастер страниц - недопустимо использовать код вне секций--}}
{{--<p>The current UNIX timestamp is {{ time() }}.</p>--}}
{{--<p>The current date {{ date("d/m/Y H:i:s") }}.</p>--}}

