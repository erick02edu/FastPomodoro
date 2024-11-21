import { useState } from "react"
import { useForm } from "react-hook-form";

const InputLogin=({name,value,setValue,type="text",icon="fa-regular fa-envelope",placeholder="...",register,validations})=>{


    const [typeInput,setTypeInput]=useState(type);
    const [iconPass,setIconPass]=useState('fa-regular fa-eye')

    const viewPassword=()=>{
        typeInput=='password' ? setTypeInput('text') : setTypeInput('password')
        //Cambiar icono
        typeInput=='password' ? setIconPass('fa-regular fa-eye-slash'): setIconPass('fa-regular fa-eye')
    }

    return <div className="d-flex flex-nowrap row bg-white border border-btn-border mx-0 align-items-center py-1">
        <div className="col col-1 d-flex align-items-center">
            <i className={icon}></i>
        </div>
        <div className={`col ${type=='password' ? 'col-11' :'col-11'} d-flex align-items-center`}>

            <input type={typeInput} className="w-100"
            // name={name}
            //value={value}
            {...register(name, validations)}

            // onChange={setValue}
            style={{outline:'none',border:'0'}} placeholder={placeholder} />
        {
            type=="password" &&
            <div className="col col-1 d-flex align-items-center justify-content-center" onClick={viewPassword}>
                <i className={iconPass}></i>
            </div>
        }
        </div>
    </div>
}

export default InputLogin;

// InputLogin.defaultProps={
//     type:"text",
//     icon:"fa-regular fa-envelope",
//     placeholder:"..."
// }
