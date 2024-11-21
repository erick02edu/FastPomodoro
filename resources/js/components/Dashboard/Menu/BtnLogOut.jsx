import { useContext } from "react"
import { MenuContext } from "../Context/ContextMenu"
import { PerfilContext } from "../Context/PerfilContext";

export function BtnLogOut(){

    const {BarraActive}=useContext(MenuContext);
    const {logOut}=useContext(PerfilContext);

    return <>
        <button className="d-flex rounded-2 btn btn-primary text-white justify-content-center py-2 mb-3" style={{width:'90%',cursor:'pointer'}}
        onClick={logOut}>
            <div className="d-flex w-75">
                <div className="flex-grow-1 d-flex justify-content-center align-items-center py-2">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>

                <div className={ BarraActive ? 'align-items-center px-2 d-none d-lg-flex': 'd-none'} style={ BarraActive ? {width:'85%'}: {} } >
                    Cerrar sesión
                </div>
            </div>
        </button>
    </>
}
