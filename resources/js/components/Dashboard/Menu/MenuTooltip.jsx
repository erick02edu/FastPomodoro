import { Tooltip } from "react-tooltip"

export function MenuTooltip(){

    return <>
        <Tooltip anchorSelect=".btnNewSesion" place="left">
            Crear nueva sesión
        </Tooltip>

        <Tooltip anchorSelect={`[name^='Home']`} place="left">
            Inicio
        </Tooltip>

        <Tooltip anchorSelect={`[name^='Mis sesiones']`} place="left">
            Sesiones
        </Tooltip>

        <Tooltip anchorSelect={`[name^='Tareas']`} place="left">
            Tareas
        </Tooltip>

        <Tooltip anchorSelect={`[name^='Configuracion']`} place="left">
            Configuración
        </Tooltip>

        <Tooltip anchorSelect="#optionPerfil" place="left" >
            Perfil
        </Tooltip>
    </>

}




