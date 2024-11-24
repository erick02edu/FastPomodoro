import { FormAddTask } from "./FormAddTask";

export function ModalAddTask(){
    return <>
    <div className="modal fade" id="ModalAddTask" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg"  >
                <div className="modal-content">
                    <FormAddTask/>
                </div>
        </div>
    </div>
    </>
}



