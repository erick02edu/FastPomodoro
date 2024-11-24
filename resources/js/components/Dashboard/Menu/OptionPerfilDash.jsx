import { ImgPerfil } from "../../Shared/ImgPerfil";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../Context/ContextMenu";

export function OptionPerfilDash(){

    const {BarraActive}=useContext(MenuContext)

    return  <div className="w-100 overflow-x-hidden d-flex flex-nowrap justify-content-center">
        <NavLink to={`home/perfil`} end={ "" ? false : true} className={({isActive})=>(isActive
            ? "d-flex rounded-2 bg-body-secondary  justify-content-center text-body py-2 text-decoration-none"
            : 'd-flex rounded-2 bg-body justify-content-center text-body py-2 text-decoration-none'
        )} style={{width:'95%',cursor:'pointer'}} id="optionPerfil">

            <div className="d-flex w-75">

                <div className="flex-grow-1 d-flex justify-content-center align-items-center py-1">
                    <div className="flex-grow-1 d-flex justify-content-center align-items-center"
                    style={{height:'20px',cursor:'pointer'}}>
                        <ImgPerfil height={"75%"}/>
                    </div>
                </div>

                <div className={ BarraActive ? 'align-items-center px-2 d-none d-md-flex': 'd-none'}
                    style={ BarraActive ? {width:'85%'}: {} } >
                    Perfil
                </div>
            </div>
        </NavLink>
    </div>
}
