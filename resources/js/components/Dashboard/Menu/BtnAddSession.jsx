import { useContext } from "react";
import { MenuContext } from "../Context/ContextMenu";


export function BtnAddSession(){
    const {BarraActive}=useContext(MenuContext)
    return <>
          <div className="w-100 overflow-x-hidden d-flex flex-nowrap justify-content-center">
            <button className='d-flex rounded-2 btn btn-primary justify-content-center text-white py-2 btnNewSesion' id="btnAddSession"
            style={{width:'95%',cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#ModalCreateSession"
            >
                <div className="d-flex w-75">
                    <div className="flex-grow-1 d-flex justify-content-center align-items-center py-1">
                        <i className='fa-solid fa-plus'></i>
                    </div>

                    <div className={ BarraActive ? 'align-items-center px-2 d-none d-lg-flex': 'd-none'} style={ BarraActive ? {width:'85%'}: {} } >
                        Nueva sesión
                    </div>


                </div>
            </button>
        </div>
    </>
}


