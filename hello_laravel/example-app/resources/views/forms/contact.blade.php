<form method="POST" action="{{url('/c/pv121')}}">
    @csrf

    <label>
        user name:
        <input type="text" name="userName" value="{{$userName}}">
    </label>
    <input type="submit">

    @include("forms.errors")

</form>
