import { useContext } from "react"
import { SesionContext } from "../Context/ContextSesion"

export function EllipsisMenu({sesion}){

    const {setSesionSelect,setEditName}=useContext(SesionContext)

    return <div className="btn-group dropstart" role="group">
        <div className="btn btn-body" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <div className="dropdown-menu " aria-labelledby="dropdownMenuLink">
            <div className=" dropdown-header">
                Acciones
            </div>

            <button className="dropdown-item"
            onClick={ ()=>{
                setEditName(true)
                setSesionSelect(sesion)
            } }>
                <i className="fa-solid fa-pen-to-square me-1"></i> Renombrar sesión
            </button>

            <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal"
            onClick={ ()=>{
                console.log("asignando delete")
                setSesionSelect(sesion)
            } }>
                <i className="fa-solid fa-trash me-1" ></i> Eliminar sesión
            </button>
        </div>
    </div>

}




