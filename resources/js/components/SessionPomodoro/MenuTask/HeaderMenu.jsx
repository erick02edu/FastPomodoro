
import { BtnAddTask } from "./BtnAddTask"

export function HeaderMenu(){
    return  <div className="bg-body d-flex bg justify-content-between pt-4 pb-1  align-items-center position-sticky top-0 z-1 left-0">
        <div className="fs-4 "> Lista de tareas</div>
        <BtnAddTask/>
    </div>
}
