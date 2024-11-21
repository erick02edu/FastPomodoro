import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades"
export function OrderTaskSesion(){

    return <div id="OrderTasks">

        <h5 className="mt-4"><strong>Orden de ejecución de tareas en una sesión</strong></h5>

        <p className="mt-3">
            Las tareas dentro de una sesión de estudio se ejecutan en el orden indicado por ejemplo en la siguiente imagen podemos observar que la primera tarea
            que se realizara dentro de la sesión es
            <i>"Repaso de verbos"</i> una vez terminada esta tarea se pasara a la siguiente en este caso <i>"Estudiar vocabulario de lectura"</i>
        </p>

        <ImgsFuncionalidades urlImg="img/imgFuncionalidades/SesionEstudio/SesionEstudio2.jpg"/>

        <p className="mt-3">
            Si desea cambiar el orden puede hacerlo moviendo las tareas a traves de las flechas en la parte derecha de cada tarea.
        </p>

        <ImgsFuncionalidades urlImg="img/imgFuncionalidades/SesionEstudio/SesionEstudio3.jpg"/>
        <ImgsFuncionalidades urlImg="img/imgFuncionalidades/SesionEstudio/SesionEstudio4.png"/>

    </div>
}

