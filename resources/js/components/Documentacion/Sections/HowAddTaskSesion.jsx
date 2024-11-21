import { Link } from "react-router-dom"
import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades"

export function HowAddTaskSesion(){
    return <>
        <h3 className="">
            <strong>1. Agregar tareas a una sesión</strong>
        </h3>
        <p>Para agregar tareas a una sesión selecciona la opción<i>"Agregar Tareas"</i> </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/AddTaskToSesion/AddTaskToSesion1.jpg"/>

        <p>En el siguiente apartado se mostrara todas las tareas que se tienen creadas, si aun no tienes tareas creadas podrás crear una <Link to="/funciones/Configuraciones/#FastTask" className=""> tarea rápida </Link>
            dando click en el botón mas (+)
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/AddTaskToSesion/AddTaskToSesion2.jpg"/>

        <p className="mt-3">Escribe el nombre de la tarea que quieres realizar para crear una tarea rápida, por ejemplo "Repaso de verbos".
            Estas tareas por defecto tendrán ciertos valores como el tiempo de sesiones, el numero de pomodoros, etc. Para ver mas información sobre los valores por defecto de una tarea rápida consulte el
            siguiente <Link to="/funciones/Configuraciones/#FastTask">enlace</Link>
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/AddTaskToSesion/AddTaskToSesion3.jpg"/>

        <p className="mt-3">Una vez creada la tarea puedes cambiar los datos como su numero de pomodoros, el tiempo de descanso, etc dando clic en el botón para editar</p>

       <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/AddTaskToSesion/AddTaskToSesion4.jpg"/>

       <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/AddTaskToSesion/AddTaskToSesion5.jpg"/>


        <p className="mt-3">Ahora seleccionaremos la tarea que hemos creado y daremos clic en el botón <i>"Crear sesión"</i> </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Sesiones/CrearSesion4.jpg"/>

        <p className="mt-3">¡Listo ahora podemos dar clic en iniciar sesión para comenzar a estudiar!</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Sesiones/CrearSesion5.jpg"/>
    </>
}




