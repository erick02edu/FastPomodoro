import { useState } from "react";

const InputRegister=({name,value,setValue,type,icon,placeholder})=>{

    const [typeInput,setTypeInput]=useState(type);
    const [iconPass,setIconPass]=useState('fa-regular fa-eye')

    const viewPassword=()=>{
        typeInput=='password' ? setTypeInput('text') : setTypeInput('password') 
        //Cambiar icono
        typeInput=='password' ? setIconPass('fa-regular fa-eye-slash'): setIconPass('fa-regular fa-eye')
    }

    return <div className="w-100 row border border-btn-border py-1 d-flex flex-nowrap">
        <div className="col-1 d-flex justify-content-center align-items-center ">
            <i className={icon}></i>
        </div>
        <div className={`col ${type=='password' ? 'col-10' :'col-11'}`} >
            <input type={typeInput} id="name" name={name} required className="w-100 border-0"
            value={value} onChange={setValue}
            placeholder={placeholder} style={{outline:'none'}} />
        </div>
        {
            type=="password" &&                   
            <div className="col col-1 d-flex align-items-center justify-content-center" onClick={viewPassword}>
                <i className={iconPass}></i>
            </div>
        }
    </div>
}

export default InputRegister;

InputRegister.defaultProps={
    type:"text",
    icon:"fa-regular fa-envelope",
    placeholder:"..."
}
