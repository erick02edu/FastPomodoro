import { createRoot } from "react-dom/client";
import { LogoFastPomodoro } from "../Shared/LogoFastPomodoro";
import { BtnInicioGoogle } from "../Shared/BtnInicioGoogle";
import FormRegister from "./Components/FormRegister";

export function AppRegister(){
    return (
        <div className="container-fluid">
            <div className="row" style={{height:'100vh',maxHeight:'100vh'}}>
                <div className="d-none d-md-block col-6 h-100 p-0">

                    <div className="w-100 d-flex flex-column justify-content-center h-100">
                        <div className="bg-primary w-100 flex-grow-1" style={{borderEndEndRadius:'40px'}}>
                        </div>

                        <div className=" w-100 flex-grow-0 d-flex flex-column justify-content-center align-items-center bg-primary">
                            <div className=" bg-light w-100 d-flex flex-column justify-content-center align-items-center"
                            style={{borderStartStartRadius:'40px',borderEndStartRadius:'40px'}} >
                                <br />
                                <h1>Bienvenido</h1>
                                <p>Regístrate </p>
                            </div>
                        </div>

                        <div className="bg-primary w-100 flex-grow-1" style={{borderStartEndRadius:'40px'}}>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 h-100 p-3 py-5">
                    <div className=" px-5 d-flex flex-column justify-content-center align-items-center h-100 ">

                        <div className="w-100 px-5 py-1">
                            <LogoFastPomodoro link={true}/>
                        </div>

                        <div className="w-100 px-5 py-2">
                            <h4>Crea una nueva cuenta</h4>
                        </div>

                        <FormRegister/>

                        <div className="w-100 d-flex justify-content-center ">
                            ¿Ya tienes cuenta? <a href="/login" className="ms-1"> Inicia sesión aquí</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

if(document.getElementById('appRegister')){
    createRoot(document.getElementById('appRegister')).render(<AppRegister/>)
}

