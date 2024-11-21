import { useContext, useEffect, useRef, useState } from "react"
import { GroupTaskContext } from "../Sections/GroupTasks/Context/ContextGroupTask"
import InfiniteScroll from "react-infinite-scroll-component";
import { GrowingSpinner } from "../../Shared/GrowingSpinner";
import { ChargingSpinner } from "../../Shared/ChargingSpinner";
import { BarraBusquedaGroup } from "../Sections/GroupTasks/Components/BarraBusquedaGroup";
import { BtnAddGroup } from "../Sections/GroupTasks/Components/BtnAddGroup";

//Parámetros
/*Función que contenga un parámetro en el cual se devolverá la lista de grupos de tareas que se seleccionen en este componente
con esta función podrás actualizar tu propio estado según tus necesidades*/
//Ejemplo de un parámetro valido
/*
    const setListGroupTask=(grupoSeleccionados){
        ...Lógica para actualizar tu propio estado
    }
*/

export function SelectGroup({setListGroupTask}){

    const {ListGroupTask,getGroupTask,hasMore,isLoadingGroup,getNextGroup}=useContext(GroupTaskContext);

    const [GroupSelect,setGroupSelect]=useState([])
    const btnReload=useRef()

    useEffect(()=>{

        getGroupTask();

        const modalCreate=document.getElementById("ModalCreateSession").addEventListener('show.bs.modal',(event)=>{
            //Boton que activo el modal
            const button=event.relatedTarget;

            const reload=button.getAttribute('data-reload');

            if(reload=="true"){
                setTimeout(() => {
                    btnReload.current.click();
                }, 200);
            }
        })


        return ()=>{
            setGroupSelect([]);
            setListGroupTask([]);
        }
    },[])

    useEffect(()=>{
        //Se devuelven la lista de grupos seleccionados
        setListGroupTask(GroupSelect)
    },[GroupSelect])


    const hanleCheckbox=(e,group)=>{
        if(e.target.checked){
            setGroupSelect(prevGroup=>{
                return [...prevGroup,group]
            })
        }else{
            deleteSelectGroupTask(group.id)
        }
    }

    const deleteSelectGroupTask=(id)=>{
        setGroupSelect((prevGroup)=>(
            prevGroup.filter(group=>group.id!=id)
        ))
    }

    const nextGroups=()=>{

        getNextGroup();
    }

    return <div className="rounded-2 mt-2 px-2 pt-1">

            { GroupSelect.length > 0 &&
                <div>
                    <label className="form-label">Grupos de tareas seleccionadas:</label>
                    <div className="d-flex flex-wrap gap-2">
                    {
                        GroupSelect.map((group)=>(
                            <div className="d-flex gap-2 p-2 rounded-2 bg-body-secondary align-items-center" key={group.id}>
                                <span>{group.nameGroup}</span>
                                <div>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            }
        <div className="mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1">Seleccionar grupos</div>
                <div className="d-flex gap-2 align-items-center">
                    <BarraBusquedaGroup/>
                    <BtnAddGroup onlyIcon={true} returnModalCreateSesion={true}/>
                    <div>
                        <button className="btn btn-secondary" onClick={()=>getGroupTask()} ref={btnReload}>
                            <i className="fa-solid fa-rotate-right"></i>
                        </button>
                    </div>
                    {/* <button className="btn btn-primary"><i className="fa-solid fa-plus text-white"></i></button> */}
                </div>
            </div>
            <div className="border p-2 rounded-2 overflow-y-auto" id="sectionGroup" style={{height:'200px'}}>
                    {
                        isLoadingGroup ? <div className="w-100 d-flex justify-content-center align-items-center mt-5" style={{height:'100px'}}>
                            <ChargingSpinner/>
                        </div>
                        : ListGroupTask.length==0 ? <div className="d-flex justify-content-center align-items-center" style={{height:"150px"}}>
                            No se encontró ningún grupo
                        </div>
                        :<InfiniteScroll
                            dataLength={ListGroupTask.length}
                            next={nextGroups}
                            hasMore={hasMore}
                            scrollableTarget="sectionGroup"
                            loader={<GrowingSpinner/>}
                        >

                            <div className="d-flex flex-column gap-2">
                            {
                                ListGroupTask.map(group=>(
                                    <div key={group.id} className="my-2 px-2 py-1 bg-body-secondary rounded-2 d-flex gap-2 align-items-center">
                                        <input type="checkbox"  value={group.id} className=" form-check"
                                        onChange={(e)=>{ hanleCheckbox(e,group)} }
                                        checked={ GroupSelect.includes(group) }/>

                                        <span>{group.nameGroup}</span>
                                    </div>
                                ))
                            }
                            </div>
                        </InfiniteScroll>

                    }

            </div>
        </div>

    </div>

}

