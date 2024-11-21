<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $datos['nameSesion'] ?? 'Sesion Pomodoro'}}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!--Favicon-->
    <link rel="shortcut icon" type="image/png" href="{{ asset('/img/CerebroTriste.png') }}">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js','resources/css/SesionPomodoro.css'])

    <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
</head>
<body data-bs-theme="dark" id="bodyElement">

    <script>

        window.appData = @json($datos);

        const bodyElement = document.getElementById('bodyElement');

        if (window.appData.darkMode) {
            bodyElement.setAttribute('data-bs-theme', 'dark');
        } else {

        bodyElement.setAttribute('data-bs-theme', 'light');
        }


    </script>

    <div id="appSessionPomodoro" >

    </div>


</body>
</html>
