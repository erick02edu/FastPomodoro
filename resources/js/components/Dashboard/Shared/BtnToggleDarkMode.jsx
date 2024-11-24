import { useContext, useEffect, useState } from "react"
import { ConfigContext } from "../Sections/Config/Context/ContextConfig";

export function BtnToggleDarkMode(){

    const [checked,setChecked]=useState(document.body.getAttribute('data-bs-theme')=='dark');

    const {config,toggleMode}=useContext(ConfigContext);

    const handleCheckboxChange=()=>{
        setChecked(!checked);
        toggleMode();
    }

    useEffect(()=>{
        setChecked(config.darkMode)
    },[config])


    return <>
        <input
            type="checkbox"
            id="btnToggleDarkMode"
            checked={checked}
            onChange={handleCheckboxChange}
            className="d-none"
        />
        <label htmlFor="btnToggleDarkMode" className="toggleDark border border-body-secondary border-3"
        style={{
            width:"40px",
            height:"25px",
            borderRadius:"200px",
            cursor:'pointer',
            position:'relative'
        }}></label>

    </>
}





