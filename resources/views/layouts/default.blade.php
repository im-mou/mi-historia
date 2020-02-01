<!doctype html>
<html>
<head>
    @include('includes.head')
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div class="container">

    <header class="row">
        @include('includes.header')
    </header>

    <div id="main" class="row">

            @yield('content')

    </div>

    <footer class="row">
        @include('includes.footer')
    </footer>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</div>
</body>
</html>