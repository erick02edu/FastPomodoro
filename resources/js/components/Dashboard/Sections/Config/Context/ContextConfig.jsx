import axios from "axios";
import { createContext,useRef,useState } from "react";
import { BtnToogleMode } from "../../../Menu/BtnToogleMode";
import { Toast } from "bootstrap";

export const ConfigContext=createContext()

export function ContextConfig(props){

    const refToastSavefSettings=useRef();
    const [iconMode,setIconMode]=useState('fa-solid fa-moon');

    const [config,setConfig]=useState({
        TimeInterval:window.settings.TimeInterval,
        breakTime:window.settings.breakTime,
        numPomodoros:window.settings.numPomodoros,
        numPomoBreakTime:window.settings.numPomoBreakTime,
        breakTimeLong:window.settings.breakTimeLong,
        darkMode:window.settings.darkMode==1,
    })

    const handleConfig=(event)=>{
        console.log(event)
        setConfig(prevConfig=>{
            return {
                ...prevConfig,
                [event.target.name]:event.target.value
            }
        })
    }

    const changeConfigDarkMode=(currentMode)=>{
        setConfig(prevConfig=>{
            return {
                ...prevConfig,
                "darkMode":currentMode
            }
        })
    }

    const toggleMode=()=>{
        const body = document.body;
        const currentTheme = body.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setIconMode(currentTheme==='dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun' )
        body.setAttribute('data-bs-theme', newTheme);
        changeConfigDarkMode(newTheme=='dark')

    }

    const saveSettings=async()=>{
        try {
            const response=await axios.post("/saveConfig",config);

            if(response.status==200){
                window.settings.TimeInterval=config.TimeInterval;
                window.settings.breakTime=config.breakTime;
                window.settings.numPomodoros=config.numPomodoros;
                window.settings.numPomoBreakTime=config.numPomoBreakTime;
                window.settings.breakTimeLong=config.breakTimeLong;
                window.settings.darkMode=config.darkMode;
            }

            let toastSaveSettings=new Toast(refToastSavefSettings.current);
            toastSaveSettings.show();


        } catch (error) {
            console.log(error)
        }
    }

    return <ConfigContext.Provider value={{
        config,
        handleConfig,
        changeConfigDarkMode,
        saveSettings,
        toggleMode,
        iconMode,
        refToastSavefSettings
    }}>
        {props.children}
    </ConfigContext.Provider>
}



