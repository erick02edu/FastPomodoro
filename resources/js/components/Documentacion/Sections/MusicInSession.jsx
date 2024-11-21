import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades";


export function MusicInSession(){

    return <div className="pt-4" id="Music">
        <h5><strong>Música durante una sesión</strong></h5>

        <p className="mt-3">
            FastPomodoro permite la opción de integración de música durante las sesiones.
            Esta integración puede ser a traves de música ya predeterminada o también se cuenta con la integración de Spotify.
        </p>

        <strong className="mt-3">Música predeterminada</strong>

        <p className="mt-3">FastPomodoro ofrece un pequeño catalogo de música que se puede emplear durante la sesión con el fin de mejorar su rendimiento, para
        poder interactuar con esta música puedes hacerlo a traves de las diferentes opciones de la barra de sonido para cambiar la música a voluntad.</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/MusicSesion/MusicSesion1.jpg"/>

        <p className="mt-3">
            También puedes cambiar las canciones al dar clic en el icono izquierdo de la barra de sonido esto nos abrirá una ventana donde podrá
            seleccionar directamente una canción.
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/MusicSesion/MusicSesion2.jpg"/>
        <div className="my-3">
            <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/MusicSesion/MusicSesion3.jpg"/>
        </div>


        <strong className="my-3">Música por medio de playlist con spotify</strong>

        <p className="mt-3">
            Si deseamos reproducir música por medio del servicio de Spotify podemos irnos al apartado de playlist y buscar una playlist de nuestra preferencia
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/MusicSesion/MusicSesion4.jpg"/>

        <div className="mt-3">
            <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/MusicSesion/MusicSesion5.jpg"/>
        </div>

        <p className="mt-3">
            Seleccionamos la playlist de nuestra preferencia para empezar a reproducir la playlist en la sesión.
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/MusicSesion/MusicSesion6.jpg"/>

        <div className="mt-3">
            <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/MusicSesion/MusicSesion7.jpg"/>
        </div>

    </div>

}

