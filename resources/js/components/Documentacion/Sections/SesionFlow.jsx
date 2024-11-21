import { Link } from "react-router-dom"
import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades"

export function SesionFlow(){
    return <>
        <h3 className="" id="Inicio">Panel de estudio para sesión pomodoro</h3>

        <p className="mt-3">A continuación se describe el flujo que tiene de forma natural una sesión de estudio.</p>

        <p className="mt-3">Cada que comienza una nueva sesión FastPomodoro nos informa que la sesión esta lista para dar comienzo.</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio1.jpg"/>

        <p className="mt-3"> Al comenzar la sesión la primera tarea en ejecutarse sera la establecida en el <Link to="/funciones/sesionesEstudio/#OrderTasks">orden de ejecución</Link> la cual comenzara a correr de acuerdo a los tiempos que hayamos establecido en dicha tarea</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio2.jpg"/>

        <p className="mt-3">Cuando un pomodoro finaliza sonora una alarma y se desplegara una ventana que nos indica que la etapa de descanso ha comenzado</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio3.jpg"/>
        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio4.jpg"/>

        <p className="mt-3">Cuando el descanso termine se iniciara el siguiente pomodoro y se desmarca un pomodoro indicando que este ha sido completado</p>
        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio5.jpg"/>

        <p className="mt-3">
            Cuando todos los pomodoros de una tarea han sido completados la tarea se considera completada por lo que se nos abre una ventana para elegir nuestra siguiente tarea
            que por defecto sera la tarea correspondiente configurada en el <Link to="/funciones/sesionesEstudio/#OrderTasks">orden de ejecución</Link>
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio6.jpg"/>
        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio7.jpg"/>

        <p className="mt-3">
            Cuando finalmente no tenemos ninguna tarea pendiente la sesión se considera finalizada.
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio8.jpg"/>

        <h5 className="mt-3"> <strong>Marcar una tarea como completada</strong></h5>

        <p className="mt-3">
            Si hemos terminado nuestra tarea antes de tiempo no tenemos que esperar a que el cronometro termine ya que podemos marcarla como completada para seguir con nuestras siguientes tareas
            por ejemplo si estas realizando dos tareas y la primera ya las has finalizado puedes posicionarte sobre la parte izquierda de la tarea y dar clic en el check para marcarla como completada.
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio9.jpg"/>

        <p className="mt-3">Esto te permitirá seguir con tus siguientes tareas sin perder tiempo.</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/PanelEstudio/PanelEstudio10.jpg"/>

    </>
}



