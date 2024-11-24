import { useContext } from "react";
import { MenuContext } from "../Context/ContextMenu";
import { ConfigContext } from "../Sections/Config/Context/ContextConfig";

export function BtnToogleMode(){

    const {BarraActive}=useContext(MenuContext);
    const {toggleMode,iconMode}=useContext(ConfigContext);

    return <>
        <div className="w-100 overflow-x-hidden d-flex flex-nowrap justify-content-center">
            <button className="d-flex rounded-2 btn bg-body-secondary justify-content-center py-2" style={{width:'90%',cursor:'pointer'}}
            onClick={toggleMode}>
                <div className="d-flex w-75">
                    <div className="flex-grow-1 d-flex justify-content-center align-items-center py-2">
                        <i className={iconMode}></i>
                    </div>

                    <div className={ BarraActive ? 'align-items-center px-2 d-none d-lg-flex': 'd-none'} style={ BarraActive ? {width:'85%'}: {} } >
                        Modo oscuro
                    </div>
                </div>
            </button>
        </div>
    </>
}


