import { useContext,useState } from "react";
import { MenuContext } from "../Context/ContextMenu";
import { NavLink } from "react-router-dom";
import { PerfilContext } from "../Context/PerfilContext";
import { Tooltip } from "react-tooltip"

const OptionMenuDash=({nameOption,iconOption,typeIcon="icon",route})=>{

    const {urlImgPerfil}=useContext(PerfilContext);
    const {BarraActive}=useContext(MenuContext)


    return <>
        <div className="w-100 overflow-x-hidden d-flex flex-nowrap justify-content-center">
            <NavLink
            to={`/home/${route}`}

            isActive={(match, location)  =>location.pathname.startsWith(`/home/${route}`)}
            end={route==""? true : false}

            className={({isActive})=>(
                isActive
                ? "d-flex rounded-2 bg-body-secondary  justify-content-center text-body py-2 text-decoration-none"
                : 'd-flex rounded-2 bg-body justify-content-center text-body py-2 text-decoration-none'
            )} style={{width:'95%',cursor:'pointer'}} name={`${nameOption}`}>
                <div className="d-flex w-75">
                    <div className="flex-grow-1 d-flex justify-content-center align-items-center py-1">
                        {
                            iconOption && typeIcon=="icon" ?
                                <i className={iconOption}></i>
                            : typeIcon=="img" && <div className="flex-grow-1 d-flex justify-content-center align-items-center"
                            style={{height:'20px',cursor:'pointer'}}>
                                <img className="rounded-circle h-100" alt="" style={{width:'70%'}}
                                src={iconOption ?? urlImgPerfil}></img>
                            </div>
                        }
                    </div>

                    <div className={ BarraActive ? 'align-items-center px-2 d-none d-md-flex': 'd-none'}
                    style={ BarraActive ? {width:'85%'}: {} } >
                        {nameOption}
                    </div>

                </div>
            </NavLink>
        </div>
    </>
}

export default OptionMenuDash;



