import { BtnLogOut } from "./BtnLogOut";
import { useEffect, useContext } from "react";
import { MenuContext } from "../Context/ContextMenu";
import SlidingMenu from "./SlidingMenu";
import { BtnAddSession } from "./BtnAddSession";
import { BtnToogleMode } from "./BtnToogleMode";
import { LogoFastPomodoro } from "../../Shared/LogoFastPomodoro";

const MenuDashboard=()=>{

    const {BarraNavegation,title,setBarraActive,cambiarBarra}=useContext(MenuContext);

    useEffect(()=>{
    // Crea un objeto MediaQueryList
    const mediaQueryList = window.matchMedia('(max-width: 780px)');
    // Verifica el estado inicial
    handleScreenSizeChange(mediaQueryList.matches);
    // Agrega un listener para detectar cambios en el tamaño de pantalla
    mediaQueryList.addListener((event) => handleScreenSizeChange(event.matches));
        // Función que se ejecuta cuando el tamaño de pantalla sea menor a 780px
        function handleScreenSizeChange(matches) {
            if (matches) {
                BarraNavegation.current.classList.remove('active');
                setBarraActive(false)
                title.current.style.display='none'
            }
        }
    },[])

    return <div ref={BarraNavegation} className="barNavigation active">
            <div style={{height:'100vh'}} className="position-sticky top-0 left-0  shadow overflow-x-hidden overflow-y-auto px-2">

            <div className="d-flex flex-column gap-2 mt-1 mt-md-0 overflow-y-auto ">
                <div className="py-3 w-100 px-3 d-flex flex-nowrap justify-content-between  ">
                    <div ref={title}>
                        <LogoFastPomodoro/>
                    </div>
                    <div className="d-none d-md-block">
                        <i className="fa-solid fa-bars" style={{scale:'1.5'}} onClick={cambiarBarra}></i>
                    </div>
                </div>

                <div className="d-flex flex-column gap-3">
                    <BtnAddSession/>
                    <SlidingMenu/>
                </div>
            </div>

            <div className="mt-3 d-flex flex-column gap-2">
                <BtnToogleMode/>
                
                <div className="w-100 overflow-x-hidden d-flex flex-nowrap justify-content-center">
                    <BtnLogOut></BtnLogOut>
                </div>
            </div>
        </div>
    </div>

}
export default MenuDashboard;
