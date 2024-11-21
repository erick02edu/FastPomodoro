{{-- @extends('layouts.app')

<script>
    window.user=@json($user);
    window.avatares=@json($avatares);
    window.settings=@json($settings);
</script>

<div id="appDashboard">

</div> --}}

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- <title>{{ config('app.name', 'FastPomodoro') }}</title> --}}

    <title>Fast pomodoro</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <!--Favicon-->
    <link rel="shortcut icon" type="image/png" href="{{ asset('/img/CerebroTriste.png') }}">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>


</head>
<body data-bs-theme="dark" id="bodyElement">

    <div id="appDashboard">

    </div>

    <script>
        window.user=@json($user);
        window.avatares=@json($avatares);
        window.settings=@json($settings);

        // // Seleccionar el elemento body
        const bodyElement = document.getElementById('bodyElement');

        // Verifica el valor de dark_mode en las configuraciones y establece el tema
        if (window.settings.darkMode) {

            bodyElement.setAttribute('data-bs-theme', 'dark');
        } else {

            bodyElement.setAttribute('data-bs-theme', 'light');
        }
    </script>

</body>
</html>
