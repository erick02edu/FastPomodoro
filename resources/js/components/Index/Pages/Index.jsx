
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Menu } from "../Components/Menu";
import { SectionWelcome } from "../Components/SectionWelcome";
import { ContentIndex } from "../Components/ContentIndex";
import { FooterIndex } from "../Components/Footer.Index";

export default function Index(){

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
        <div className="position-relative h-100">

            <Menu/>

            <SectionWelcome/>

            <ContentIndex/>

            <FooterIndex/>

        </div>
    </>

}
