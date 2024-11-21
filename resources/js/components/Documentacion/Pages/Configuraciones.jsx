import { useLocation } from "react-router"
import { useEffect } from "react"
import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades";

export default function Configuraciones(){

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const section = document.querySelector(location.hash);
        if (section) {
            const offset = 95; // Ajusta este valor a la altura de tu menú fixed
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
      }
    }, [location]);

    return <>
        <h3 id="Inicio">Configuraciones</h3>

        <h5 className="mt-3" id="FastTask"><strong>Configuraciones para tareas rápidas</strong></h5>

        <p className="mt-3">
             Dentro de Fastpomodoro nosotros podemos crear una tarea rápida desde diferentes partes del sistema simplemente ingresando el nombre de nuestra tarea.
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Configurations/FastTask.jpg"/>


        <p className="mt-3">
           Cuando esta tareas se crean automáticamente se les asigna un numero de pomodoros,
           un tiempo de duración para los pomodoros, un tiempo de descanso, asi como un tiempo descanso largo y cada cuanto hacer este descanso.
           Y aunque esto valores pueden ser editados puede ser un poco incomodo estarlos cambiando constantemente asi que que nosotros podemos
           ajustar estos valores a los que mas se adapten a nosotros.
        </p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Configurations/FastTask2.jpg"/>

        <p className="mt-3">Para editar esto valores nos dirigimos a la parte de configuración dentro de nuestro panel de control y aquí podemos ver los valores por defecto que toman estas tareas</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Configurations/Configuracion1.jpg"/>

        <p className="mt-3">Podemos cambiar estos valores y dar clic en el botón de <strong>"Guardar configuraciones"</strong> para que estos cambios se vean en el sistema</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Configurations/Configuracion2.jpg"/>

        <div className="mt-3">
            <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Configurations/Configuracion3.jpg"/>
        </div>

        <p className="mt-3">Asi la proxima vez que se cree una tarea rápida tomara estos nuevos valores por defecto</p>

        <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Configurations/Configuracion4.jpg"/>

        <div className="mt-3">
            <ImgsFuncionalidades urlImg="img/ImgFuncionalidades/Configurations/Configuracion5.jpg"/>
        </div>
    </>
}


