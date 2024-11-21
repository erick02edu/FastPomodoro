import { BtnFinishSession } from "../shared/BtnFinishSession"
import { ListPendingTask } from "./ListPendingTask"
import { ListCompletTask } from "./ListCompletTask"
import { BtnAddTask } from "./BtnAddTask"
import { HeaderMenu } from "./HeaderMenu"

export function MenuTask(){

    return <>

        <div className="bg-body d-flex bg justify-content-between pt-4 pb-1  align-items-center position-sticky top-0 z-1 left-0">
            <div className="fs-4 "> Lista de tareas</div>
            {/* <BtnAddTask/> */}
        </div>

        <hr className="text-white m-0 z-5" />

        <div className="mt-2 mb-4" >
            <ListPendingTask/>
            <ListCompletTask/>
        </div>


        <div className="text-white d-none d-md-flex flex-column gap-3 flex-grow-1 align-items-end mt-4">
            <BtnFinishSession/>
        </div>

    </>

}
