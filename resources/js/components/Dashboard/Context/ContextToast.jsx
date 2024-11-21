import { createContext, useRef, useState } from "react";
import { Toast } from "bootstrap";

export const ToastContext=createContext()

export function ContextToast(props){

    const [titleToast,setTitleToast]=useState('');
    const [contentToast,setContentToast]=useState();
    const [typeToast,setTypeToast]=useState();

    const toastAlert=useRef();



    const openToast=(title,content,type)=>{
        setTitleToast(title);
        setContentToast(content);
        setTypeToast(type)

        let toast=new Toast(toastAlert.current);
        toast.show();
    }



    return <ToastContext.Provider value={{
        toastAlert,
        titleToast,
        contentToast,
        typeToast,
        openToast
    }}>
        {props.children}
    </ToastContext.Provider>

}



