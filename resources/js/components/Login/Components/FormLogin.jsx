import { useState } from "react"
import axios from "axios";
import InputLogin from './InputLogin'
import { useForm } from "react-hook-form";

export function FormLogin(){


    const {register,handleSubmit,watch,formState}=useForm();
    const credentials=watch();

    // const [credentials,setCredentials]=useState({
    //     email:'',
    //     password:''
    // });

    const [errorMessage,setErrorMessage]=useState('')
    const csrfToken=document.querySelector(' meta[name="csrf-token"] ').getAttribute('content');

    const handleInputChange=(e)=>{
        // setCredentials({
        //     ...credentials,
        //     [e.target.name]:e.target.value
        // })
    }

    const Login=(e)=>{

        //alert("Intentando login")
        setErrorMessage("");
        //e.preventDefault();
        axios.post('/login',JSON.stringify(credentials),{
            redirect:'follow',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':csrfToken
            }
        })
        .then(response=>window.location.href='/home')
        .catch(error=>{


            switch (error.response.data.message) {
                case "These credentials do not match our records.":
                    setErrorMessage("No se encontró ningún registro con estas credenciales")
                    break;
                default:
                    setErrorMessage("Ocurrió un error inesperado. Intente nuevamente");
                    break;

            }


            // switch (error.response.data.message) {
            //     case "These credentials do not match our records.":
            //         setErrorMessage("No se encontró ningún registro con estas credenciales")
            //         break;
            //     case "The email field is required. (and 1 more error)" :
            //         setErrorMessage("No se han ingresado ningunas credenciales")
            //         break;
            //     case "The email field is required.":
            //         setErrorMessage("El correo es requerido")
            //         break;
            //     case "The password field is required.":

            //         setErrorMessage("La contraseña es requerida");
            //         break;
            //     default:
            //         setErrorMessage("Ocurrió un error inesperado. Intente nuevamente");
            //         break;
            // }
        })
    }

    return <>
        <div className="d-flex">Ingresa tus credenciales</div>

        <form onSubmit={handleSubmit(Login)} className="d-flex flex-column gap-3 py-1">

            <div className="d-flex flex-column gap-2">


                <div>
                    <InputLogin name="email" type="email" icon="fa-regular fa-envelope" placeholder="Email"
                    register={register} validations={{
                        required:{
                            value:true,
                            message:"El email es requerido"
                        },
                        pattern:{
                            value:/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/,
                            message:"El correo no tiene un formato valido"
                        }
                    }} />

                    {
                        formState.errors.email && <span className="text-danger">
                            {formState.errors.email.message}
                        </span>
                    }
                </div>

                <div>
                    <InputLogin name="password"
                    type="password"
                    icon="fa-solid fa-lock" placeholder="Contraseña"
                    register={register}
                    validations={
                        {
                            required:{
                                value:true,
                                message:"la contraseña es requerida"

                            }
                        }
                    } />

                    {
                        formState.errors.password && <span className="text-danger">
                            {formState.errors.password.message}
                        </span>
                    }
                </div>
            </div>

            {
                errorMessage=='' ? <></> :
                <div className="w-100">
                    <span className="text-danger font-weight-bold"> {errorMessage} </span>
                </div>
            }

            <div className="d-flex justify-content-between  ">
                <div>
                    <input className="form-check-input me-1" type="checkbox" name="remember" id="remember"/> Recuerdame
                </div>
                {/* <a href="password/reset">¿Olvidaste tu contraseña?</a> */}
            </div>

            <button type="submit" className="btn btn-primary d-flex justify-content-center fw-bold text-white border-0 rounded-1 py-2 mt-3">
                Ingresar
            </button>

        </form>

        <div className="d-flex justify-content-center">
             <span className="me-2">¿Aun no tienes cuenta?</span>
             <a href="/register" className="d-flex justify-content-center"> Regístrate</a>
        </div>
    </>
}
