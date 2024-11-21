import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades";


export function HowCreateSesion(){

    return <>
        <h3>
        <strong>¿Como crear una sesión de estudio?</strong>
        </h3>

        <p className="mt-3">Desde tu panel de control en FastPomodoro selecciona el botón de <i>"Nueva sesión"</i></p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Sesiones/CrearSesion1.jpg"/>

        <p className="mt-3">A continuación deberás asignarle un nombre a tu sesión de estudio con el que podrás identificarlo, por ejemplo en este caso usamos el nombre "Sesión de estudio de ingles"</p>


        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Sesiones/CrearSesion2.jpg"/>

        <p className="mt-3">
            Al crear una sesión FastPomodoro ofrece dos posibilidades.
        </p>

        <ul className="mt-2">
            <li>Trabajar por medio de tareas en solitario </li>
            <li>Trabajar por medio de grupos de tareas </li>
        </ul>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Sesiones/CrearSesion3.jpg"/>
        
        <p className="mt-3">
            A continuación se describen ambos métodos
        </p>


    </>
}


