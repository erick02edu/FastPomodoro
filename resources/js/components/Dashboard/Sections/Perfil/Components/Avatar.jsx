import { useContext } from "react";
import { PerfilContext } from "../../../Context/PerfilContext";

export function Avatar({urlImgPerfil}) {

    const {changeImgPerfil,urlImgCurrent}=useContext(PerfilContext);

    return<div className="col">
    <button className="p-1 btn rounded-3" onClick={()=>{
        changeImgPerfil(urlImgPerfil)
    }}>
        <img className={`w-100 rounded-2 shadow-sm ${urlImgCurrent==urlImgPerfil && 'border border-2 border-danger shadow shadow-xl'}`} style={{height:"40px"}} src={urlImgPerfil} >
        </img>
    </button>

</div>

}
