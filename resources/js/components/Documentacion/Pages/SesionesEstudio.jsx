import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { OrderTaskSesion } from "../Sections/OrderTasksSesion";
import { DesgloseSesion } from "../Sections/DesgloseSesion";

export default function SesionesEstudio(){

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
        <h3>Sesiones de estudio</h3>

        <p>Para comenzar una sesión de estudio simplemente deberemos de dar clic en el botón superior derecho "Iniciar sesión".</p>

        <ImgsFuncionalidades urlImg="img/imgFuncionalidades/SesionEstudio/SesionEstudio1.jpg"/>

        <OrderTaskSesion/>

        <DesgloseSesion/>

        {/* <ImgsFuncionalidades urlImg="img/imgFuncionalidades/SesionEstudio/SesionEstudio2.jpg"/> */}

    </div>

}

