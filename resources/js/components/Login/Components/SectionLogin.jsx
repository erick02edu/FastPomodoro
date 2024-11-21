
import { LogoFastPomodoro } from "../../Shared/LogoFastPomodoro"
import { BtnInicioGoogle } from "../../Shared/BtnInicioGoogle"
import { FormLogin } from "./FormLogin"

export function SectionLogin(){
    return <div>
        <LogoFastPomodoro link={true}/>

        <div className="my-2">
            <h3 className="fw-bold">Iniciar Sesión</h3>
            Bienvenido a FastPomodoro
        </div>

        <div>
            <BtnInicioGoogle text="Iniciar con Google"/>
        </div>

        <FormLogin/>

        <a className="d-flex gap-2 align-items-center text-decoration-none" href="/">
            <i class="fa-solid fa-circle-left"></i>
            Regresar
        </a>
    </div>
}


