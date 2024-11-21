import { useContext, useEffect } from "react";
import { ContextGroupTask, GroupTaskContext } from "../../Sections/GroupTasks/Context/ContextGroupTask";
import { SelectGroup } from "../../Shared/SelectGroup";
import { createSessionContext } from "../../Context/ContextCreateSession";
import { ModalAddGroup } from "../../Sections/GroupTasks/Components/ModalAddGroup";
import { ContextTask } from "../../Sections/Tasks/Context/ContextTask";


export function CarouselGroupTask(){

    const {setFormSesion}=useContext(createSessionContext);

    const setGroupTaskList=(gruposSeleccionados)=>{

        const idsSelect=gruposSeleccionados.map((group=>group.id));

        setFormSesion(prevForm=>{
            return {
                ...prevForm,
                'GroupTask':idsSelect
            }
        })
    }


    return <div className="carousel-item">
        <div>
            <SelectGroup setListGroupTask={setGroupTaskList}/>
        </div>
    </div>
}
