import { useLocation } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImgsFuncionalidades } from "../Components/ImgsFuncionalidades";
import { SesionFlow } from "../Sections/SesionFlow";
import { MusicInSession } from "../Sections/MusicInSession";

export default function PanelEstudio(){

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

    return <div className="pb-4">

        <SesionFlow/>

        <MusicInSession/>

    </div>

}

