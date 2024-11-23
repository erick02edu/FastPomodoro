import { useContext } from "react";
import { PerfilContext } from "../../../Context/PerfilContext";
import { Avatar } from "./Avatar";

export function ListAvatares(){

    const {changeImgPerfil,urlImgCurrent}=useContext(PerfilContext);

    return <>
        {
            window.user.avatar_external && <div className="col ">
            <button className="p-1 btn rounded-3" onClick={()=>{
                changeImgPerfil(window.user.avatar_external)
            }}>

                <img className={`w-100 rounded-2 shadow-sm ${urlImgCurrent==window.user.avatar_external && 'border border-2 border-danger shadow shadow-xl'}`} style={{height:"40px"}}
                src={window.user.avatar_external}>
                </img>
            </button>
        </div>
        }

        {
            window.avatares.map((avatar,index)=>(
                <Avatar key={index} urlImgPerfil={`${import.meta.env.VITE_API_URL}/img/Avatares/${avatar}`} />
            ))
        }
    </>
}


