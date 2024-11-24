import axios from 'axios';
import { Toast } from 'bootstrap';
import { createContext, useRef, useState} from 'react'
import { useEffect } from 'react';

export const PerfilContext=createContext();

export function ContextPerfil(props){

    const [urlImgCurrent,setUrlImgCurrent]=useState(window.user.avatar);

    const refToastChangeImgPerfil=useRef();

    let [csrfToken,setcsrfToken]=useState('');
    useEffect(()=>{
        setcsrfToken(document.querySelector(' meta[name="csrf-token"] ').getAttribute('content'));
    },[])

    const changeImgPerfil=async(urlImg)=>{
        if(urlImg!=null){
            setUrlImgCurrent(urlImg)
           try {
                const response=await axios.post('/changeImgPerfil',{urlImg})
                let toastChangePerfil=new Toast(refToastChangeImgPerfil.current)
                toastChangePerfil.show();
           } catch (error) {
                console.log(error)
           }
        }
    }

    const logOut=async()=>{
        await axios.post('/logout',{
            headers:{
                "Content-Type":"application/json",
                "X-CSRF-TOKEN:":csrfToken
            }
        })
        .then(response=>{
            if(response.status==204){
                // Obtener todas las cookies
                const cookies = document.cookie.split(";");
                // Recorrer cada cookie y establecer una fecha de expiración pasada
                cookies.forEach(cookie => {
                    const cookieName = cookie.split("=")[0].trim();
                    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                });
                location.reload();
            }
        })
        .catch(error=>console.log(error))
    }

    const deleteAccount=async(id)=>{
        try {
            const response=await axios.delete(`/user/${id}`);
        } catch (error) {
            console.log(error);
        }
        location.reload();
    }

    return <PerfilContext.Provider value={{
        urlImgCurrent,
        changeImgPerfil,
        refToastChangeImgPerfil,
        logOut,
        deleteAccount,
    }}>
        {props.children}
    </PerfilContext.Provider>
}
