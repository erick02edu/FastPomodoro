
import { useEffect, useState } from "react";
import { SesionRecents } from "./Components/SesionsRecents";
import { Tooltip } from "react-tooltip";

export default function HomeSection(){

    useEffect(()=>{
        console.log(window)
    },[])

    const [userAuth,setUserAuth]=useState(window.user);

    return <div className="">

        <div className="body bg-body-tertiary border p-4 rounded-3 w-100">
            <span className=" fs-5 font-weight-bold">Bienvenido {userAuth.name}</span>
        </div>

        <div className="my-3">
            <i className="fa-regular fa-clock me-2"></i>
            <strong>Sesiones mas recientes</strong>
        </div>

        <SesionRecents/>

    </div>
}
