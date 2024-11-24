<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>FastPomodoro</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!--Favicon-->
        <link rel="shortcut icon" type="image/png" href="{{ secure_asset('/img/CerebroTriste.png') }}">

        <!-- Scripts -->
        @viteReactRefresh
        @vite(['resources/sass/app.scss', 'resources/js/app.js','resources/css/app.css'])

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    </head>
    <body class="antialiased">
        <div id="appIndex"><div>
    </body>
</html>
