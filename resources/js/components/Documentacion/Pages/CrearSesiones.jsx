import { useLocation } from "react-router";
import { useEffect } from "react";
import { HowCreateSesion } from "../Sections/HowCreateSesion";
import { HowAddTaskSesion } from "../Sections/HowAddTaskSesion";
import { HowAddGroupSesion } from "../Sections/HowAddGroupSesion";

export default function CrearSesiones(){

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

    return <div className="w-100" id="Inicio">

        <div className="pt-3" >
            <HowCreateSesion/>
        </div>

        <div id="TaskSesion" className="mt-4">
            <HowAddTaskSesion/>
        </div>

        <div  className="mt-5 mb-3">
            <HowAddGroupSesion/>
        </div>

        <div>
            
        </div>


    </div>
}


