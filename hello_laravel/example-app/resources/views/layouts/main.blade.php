<html>
<head>
    <title>App Name - @yield('title')</title>
</head>
<body>
@section('sidebar')
    Hello {{ $userName }}
@show

<div class="container">
    @yield('content')
</div>
</body>
</html>
