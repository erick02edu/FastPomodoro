
import { useContext } from 'react'
import { PerfilContext } from '../Dashboard/Context/PerfilContext';

export function ImgPerfil({rounded=false, height="100%"}){

    const {urlImgCurrent}=useContext(PerfilContext);
  
    return <>
        <img src={urlImgCurrent} className={`${rounded ? 'rounded-circle' : 'rounded-1'}`} style={{height:`${height}`}} ></img>
    </>

}
