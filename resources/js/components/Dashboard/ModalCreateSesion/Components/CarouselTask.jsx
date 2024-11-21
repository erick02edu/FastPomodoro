import { useContext } from "react"
import { createSessionContext } from "../../Context/ContextCreateSession"
import { SelectTask } from "../../Sections/Tasks/Components/SelectTask"
import { ContextTask } from "../../Sections/Tasks/Context/ContextTask"

export function CarouselTask(){

    const {setFormSesion,formSesion}=useContext(createSessionContext)

    const handleChangeTask=(listSelect)=>{

        const idsSelect=listSelect.map((task=>task.id));

        setFormSesion(prevForm=>{
            return {
                ...prevForm,
                'ListTask':idsSelect
            }
        })
    }

    return <div className="carousel-item">

        <SelectTask name={'global'} tasks={formSesion.ListTask} setTask={handleChangeTask} returnModalCloseModalEdit="#ModalCreateSession"/>

    </div>
}



