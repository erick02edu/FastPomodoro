
import { createContext, useEffect } from "react";
import { useRef,useState } from "react";
import axios from "axios";

export const MenuContext=createContext()

export default function ContextMenu(props){

    const BarraNavegation=useRef();
    const title=useRef();
    const [BarraActive,setBarraActive]=useState(true)

    const cambiarBarra=()=>{
        if(BarraActive==true){
            BarraNavegation.current.classList.remove('active');
            title.current.style.display='none'
            setBarraActive(false)
        }
        else{
            BarraNavegation.current.classList.add('active');
            title.current.style.display='flex'
            setBarraActive(true)
        }
    }

    return <MenuContext.Provider value={{
        BarraNavegation,
        title,
        BarraActive,
        setBarraActive,
        cambiarBarra,
    }}>
        {props.children}
    </MenuContext.Provider>

}

