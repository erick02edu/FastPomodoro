import { useContext, useEffect, useRef, useState } from "react";
import { FormAddGroup } from "./FormAddGroup";
import { GroupTaskContext } from "../Context/ContextGroupTask";
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner";


export function ModalAddGroup(){

    const {getGroupTask,btnCloseModalAddGroup}=useContext(GroupTaskContext);

    const modalAddGroup=useRef()
    const [returnModalCreateSesion,setReturnModalCreateSesion]=useState(false);
    const {AddGroupTask}=useContext(GroupTaskContext);

    const [isOpen,setIsOpen]=useState(false);

    useEffect(()=>{

        const AddModal=document.getElementById("ModalAddGroup").addEventListener('show.bs.modal',(event)=>{
            //Boton que activo el modal
            const button=event.relatedTarget;

            const returnModal=button.getAttribute('data-return-modal-sesion');
            //alert(returnModal);

            if(returnModal=="false"){
               setReturnModalCreateSesion(false)
            }
            else{
                setReturnModalCreateSesion(true)
            }
        })

        const modal=document.getElementById('ModalAddGroup');
        modal.addEventListener('shown.bs.modal',()=>setIsOpen(true));
        modal.addEventListener('hidden.bs.modal',()=>setIsOpen(false));

        return ()=>{
            modal.removeEventListener('show.bs.modal',()=>setIsOpen(true));
            modal.removeEventListener('hidden.bs.modal',()=>setIsOpen(false));
        }

    },[])


    const AddGroup=()=>{

        if(returnModalCreateSesion){
            getGroupTask();
        }

        AddGroupTask();
    }

    const atributteSpecial=returnModalCreateSesion
        ? {'data-bs-toggle':'modal','data-bs-target': '#ModalCreateSession' }
        : {};

    return<div className="modal fade" id="ModalAddGroup"  tabIndex="-1" ref={modalAddGroup}>
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Agregar grupo</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" ref={btnCloseModalAddGroup}  {...atributteSpecial} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {
                        isOpen ?
                            <FormAddGroup/>
                        :
                        <div className="w-100 d-flex justify-content-center align-items-center" style={{height:'40vh'}}>
                            <ChargingSpinner/>
                        </div>
                    }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                    {...atributteSpecial}
                    >
                        Close
                    </button>
                    <button type="button"
                    {...atributteSpecial}
                    className="btn btn-primary text-white"
                    onClick={()=>AddGroupTask(returnModalCreateSesion=='')} data-reload={returnModalCreateSesion} >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    </div>



}



