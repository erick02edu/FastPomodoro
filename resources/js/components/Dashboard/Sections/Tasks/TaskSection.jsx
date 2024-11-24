import { useContext, useEffect, useState } from "react"
import { ChargingSpinner } from "../../../Shared/ChargingSpinner"
import { Task } from "./Components/Task";
import { taskContext } from "./Context/ContextTask";
import { ModalAddTask } from "./Components/ModalAddTask";
import { ToastAddTask } from "./Components/ToastAddTask";
import InfiniteScroll from "react-infinite-scroll-component";
import { GrowingSpinner } from "../../../Shared/GrowingSpinner";
import { ContentGroupTask } from "../GroupTasks/Pages/ContentGroupTask";
import { GroupTaskContext } from "../GroupTasks/Context/ContextGroupTask";
import { BarraBusquedaGroup } from "../GroupTasks/Components/BarraBusquedaGroup";
import { BarraBusquedaTask } from "./Components/BarraBusquedaTask";
import { ConfirmDeleteTask } from "./Components/ConfirmDeleteTask";
import { BtnAddGroup } from "../GroupTasks/Components/BtnAddGroup";
import { ToasUpdateTask } from "./Components/ToastUpdateTask";
import { ToastDeleteTask } from "./Components/ToastDeleteTask";
import { BtnAddTask } from "./Components/BtnAddTask";

export default function TaskSection(){

    const {section,setSection,isLoading,getTask,
        ListTasks,toastAdd,hasMore,getMoreTask
        ,busqueda,setBusqueda,getMoreTaskSearch,ToastUpdate,ToastDelete}=useContext(taskContext);

    const {getGroupTask}=useContext(GroupTaskContext);

    useEffect(() => {
        getTask();
        // Escuchar el evento 'shown.bs.tab' cuando una pestaña cambia
        const tabElements = document.querySelectorAll('button[data-bs-toggle="pill"]');

        tabElements.forEach(tab => {
          tab.addEventListener('shown.bs.tab', handleTabChange);
        });

        // Cleanup para eliminar los event listeners cuando el componente se desmonta
        return () => {
          tabElements.forEach(tab => {
            tab.removeEventListener('shown.bs.tab', handleTabChange);
          });
        };
    }, []);

    const handleTabChange = (event) => {
        const selectedTabId = event.target.id;
        // Ejecutar función dependiendo de la pestaña activa
        if (selectedTabId === 'pills-task-tab') {

            setSection("Task");
            getTask();
        } else if (selectedTabId === 'pills-groupTask-tab') {
            setSection("Group");
            getGroupTask();
        }
    };

    const nextTasks=()=>{
        if(busqueda==""){
            getMoreTask()
        }else{
            getMoreTaskSearch()
        }
    }

    return <>


        <div className="d-flex justify-content-between w-100 align-items-center flex-column flex-md-row">
            <div className="flex-grow-1">
                <h3 className="text-body">
                    {
                        section=="Task" ?
                        <>Mis tareas</>  :
                        section=="Group" ?
                        <>Grupo de tareas</>
                        :<></>
                    }
                </h3>
            </div>

            <div className="d-flex justify-content-between gap-2 align-items-center">
                <div className="flex-grow-1">
                    {
                        section=="Task" ?
                            <BarraBusquedaTask/>
                        : section =="Group" &&
                            <BarraBusquedaGroup/>
                    }
                </div>
                <div>
                    {
                        section=="Task" ?
                        <BtnAddTask/>
                        : section =="Group" &&
                        <BtnAddGroup />
                    }
                </div>
            </div>
        </div>

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-task-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    Tareas
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-groupTask-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                    Grupo de tareas
                </button>
            </li>

        </ul>

        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-task-tab">
            {
                section=="Task" &&
                <>
                <ModalAddTask/>
                <ToastAddTask nameRef={toastAdd}/>
                <ToasUpdateTask nameRef={ToastUpdate}/>
                <ConfirmDeleteTask/>
                <ToastDeleteTask nameRef={ToastDelete}/>
                {

                    isLoading ?
                        <div className="w-100 d-flex justify-content-center align-items-center mt-5" style={{height:'40vh'}}>
                            <ChargingSpinner/>
                        </div>
                    : ListTasks.length==0?
                        <div className="w-100 d-flex justify-content-center align-items-center pb-5" style={{height:'70vh'}}>
                            <div className="d-flex flex-column w-100 align-items-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/5841/5841802.png" alt="error"  className=" h-25 w-25"/>
                                <strong>No se encontró ninguna tarea</strong>
                            </div>
                        </div>
                    :<div className="d-flex flex-column">
                        {
                            <InfiniteScroll
                            dataLength={ListTasks.length}
                            next={nextTasks }
                            hasMore={hasMore}
                            loader={ <GrowingSpinner/> }
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                <b>No hay mas datos</b>
                                </p>
                            }
                            >
                            {
                                ListTasks.map((task)=>(
                                    <Task task={task} key={task.id} />
                                ))
                            }
                            </InfiniteScroll>
                        }
                    </div>
                }
                </>
            }
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-groupTask-tab">
                {
                    section=="Group" &&
                    <ContentGroupTask/>
                }
            </div>
        </div>

    </>
}
