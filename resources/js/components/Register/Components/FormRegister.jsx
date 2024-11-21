import { useState } from "react";
import InputRegister from "./InputRegister";
import axios from "axios";
import { BtnInicioGoogle } from "../../Shared/BtnInicioGoogle";

const FormRegister=()=>{
    const [formRegister,setFormRegister]=useState({
        'name':'',
        'email':'',
        'password':'',
        'password_confirmation':''
    })

    const [errorMessage,setErrorMessage]=useState('');

    const handleInputChange=(e)=>{
        setFormRegister({
            ...formRegister,
            [e.target.name]:e.target.value
        })
    }

    const csrfToken=document.querySelector(' meta[name="csrf-token"] ').getAttribute('content');

    const Register= async (e)=>{
        setErrorMessage("");
        e.preventDefault();
        await axios.post( 'register' ,JSON.stringify(formRegister),{
            headers:{
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            }
        })
        .then(response=>window.location.href = '/login')
        .catch(err=>{

            let errorEmailRepeated="The email has already been taken. (and 1 more error)"
            let errorEmailRequired="The email field is required. (and 1 more error)";
            let errorNameRequired="The name field is required. (and 1 more errors)"
            let errorPasswordRequired="The password field is required. (and 1 more errors)"
            let errorPasswordMinLength=""
            let errorPasswordConfirm="The password field confirmation does not match. (and 1 more error)"


            switch(err.response.data.message){
                case /^The email has already been taken/.test(errorEmailRepeated):
                    setErrorMessage("Este correo ya fue registrado intente con uno diferente.")
                    break;
                case /^The password field confirmation does not match/.test(errorPasswordConfirm):
                    setErrorMessage("El campo de confirmación de contraseña no coincide")
                    break;
                case /^The email field is required/.test(errorEmailRequired):
                    setErrorMessage("El campo email es requerido")
                    break;
                case /^The name field is required/.test(errorNameRequired):
                    setErrorMessage("El campo nombre es requerido");
                    break;
                case /The password field is required/.test(errorPasswordRequired):
                    setErrorMessage("La contraseña es requerida");
                    break;
                case "The password field must be at least 8 characters.":
                    setErrorMessage("La contraseña debe tener al menos 8 caracteres");
                    break;
                case "The password field must be at least 8 characters. (and 1 more error)":
                    setErrorMessage("La contraseña debe tener al menos 8 caracteres");
                    break;
                default:

                    setErrorMessage(err.response.data.message)
                    break;
            }



        })
    }

    return <form onSubmit={Register} className="d-flex flex-column gap-3 w-100 align-items-center">

        <div className="d-flex justify-content-center w-100">
            <span>Ingresa tus datos</span>
        </div>

        <InputRegister name="name" value={formRegister.name} setValue={handleInputChange} type="text"
        icon="fa-solid fa-user" placeholder="Nombre"/>

        <InputRegister name="email" value={formRegister.email} setValue={handleInputChange} type="email"
        icon="fa-solid fa-envelope" placeholder="Correo"/>

        <InputRegister name="password" value={formRegister.password} setValue={handleInputChange} type="password"
        icon="fa-solid fa-lock" placeholder="Contraseña"/>

        <InputRegister name="password_confirmation" value={formRegister.password_confirmation} setValue={handleInputChange}
        type="password" icon="fa-solid fa-lock" placeholder="Repetir contraseña"/>

        {
            errorMessage=='' ? <></> :
            <div className="w-100">
                <span className="text-danger font-weight-bold"> {errorMessage} </span>
            </div>
        }
        <div className="w-100 d-flex flex-column gap-3">
            <button type="submit" className="w-100 text-white btn-primary border-0 btn">Registrarme</button>

            <BtnInicioGoogle text="Registrarme con Google"/>
        </div>
    </form>
}

export default FormRegister;
