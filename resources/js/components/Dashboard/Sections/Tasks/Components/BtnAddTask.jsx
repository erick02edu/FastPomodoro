


export function BtnAddTask(){

    return <button className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#ModalAddTask">
        <span className="d-none d-md-inline">Agregar tarea</span>
        <span className="d-inline d-md-none">
            <i className="fa-solid fa-plus"></i>
        </span>
    </button>

}
