
import { OptionPerfilDash } from "./OptionPerfilDash"
import OptionMenuDash from "./OptionsMenuDash"


const SlidingMenu=()=>{
    return  <div className="w-100">
        <div className= "d-grid gap-3 mt-1 mt-md-0 overflow-y-auto border rounded-2 barNavigation py-2 px-1 w-100 h-100" style={{maxHeight:'55vh'}}>

            <OptionMenuDash nameOption='Home' iconOption='fa-solid fa-house' bg="body-secondary" route=""/>

            <OptionMenuDash nameOption='Mis sesiones' iconOption='fa-solid fa-clock-rotate-left' route="sesiones"/>

            <OptionMenuDash nameOption='Tareas' iconOption='fa-solid fa-list-check' route="task"/>

            <OptionMenuDash nameOption='Configuracion' iconOption='fa-solid fa-gear' route="config"/>

            <OptionPerfilDash/>

        </div>
    </div>
}

export default SlidingMenu
