import { useContext, useEffect, useState, useRef } from "react";
import { taskContext } from "../Context/ContextTask";
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner";
import { GrowingSpinner } from "../../../../Shared/GrowingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { BarraBusquedaTask } from "./BarraBusquedaTask";
import { Tooltip } from "react-tooltip";
import { ModalEditTask } from "./ModalEditTask";
import { BtnOpenModalEditTask } from "./BtnOpenModalEditTask";
import { FormEditTask } from "./FormEditTask";
import { BtnUpdateTask } from "./BtnUpdateTask";
import { TooltipTaskDetail } from "../../../Shared/TooltipTaskDetail";

//Parámetros

/*
    1. Grupo de tareas donde se guardara el estado
    2. Función que contenga un parámetro en el cual se devolverá la lista de tareas que se seleccionen en este componente
    con esta función podrás actualizar tu propio estado según tus necesidades*/
//Ejemplo de un parámetro valido para setTask
/*
    const setListTasks=(taskSeleccionadas)=>{
        ...Lógica para actualizar tu propio estado
    }
*/
export function SelectTask({name="",tasks=[],setTask,omitTask=[],returnModalCloseModalEdit=''}){

    const {getTask,ListTasks,isLoading,getMoreTask,hasMore,addTaskFast,addList,SelectTasks,setSelectTask,loadAddTask,setFormEditTask}=useContext(taskContext);
    const [count,setCount]=useState(0);
    const [viewAddTask,setViewAddTask]=useState(false)
    const [viewMessage,setViewMessage]=useState(true);

    const inputNewTask=useRef();
    const containerTasks=useRef();

    // const cambiarValor=()=>{
    //     setFormEditTask(tasks)
    // }

    useEffect(()=>{
        if(omitTask.length>0){
            setSelectTask([]);
        }
    },[omitTask])

    useEffect(()=>{
        if(count>0 && viewAddTask==true){
            inputNewTask.current.focus();
        }
    },[viewAddTask])

    useEffect(()=>{
        if(count>0){
            setTask(SelectTasks);
        }
        setCount(prevCount=>prevCount+1)
    },[SelectTasks])

    useEffect(()=>{
        // const checkScrollContent = () => {
        //     if (containerTasks.current && containerTasks.current.scrollHeight <= containerTasks.current.clientHeight && isLoading) {
        //         nextTasks();
        //     }
        // };
        // checkScrollContent();
    },[ListTasks])

    useEffect(()=>{

        if(omitTask.length>0){
            //console.log("Omit tasks")

            omitTask=omitTask.map(task=>task.id)
            //console.log(omitTask)

            getTask(omitTask);

        }else{
            getTask()
        }



        return ()=>{
            setSelectTask([]);
            setTask([]);
        }

    },[])

    const hanleCheckbox=(e,task)=>{
        if(e.target.checked){
            setSelectTask((prevTask)=>(
                [...prevTask,task]
            ))
        }
        else{
            deleteSelectTask(task.id)
        }
    }

    const deleteSelectTask=(id)=>{
        setSelectTask((prevTask)=>(
            prevTask.filter(tarea=>tarea.id!=id)
        ))
    }

    const AddTaskFast=async(e)=>{
        const nameTask=e.target.value;

        if(nameTask!=""){
            var newTask=await addTaskFast(nameTask);
            addList(newTask);
        }

        setViewMessage(true);
        setViewAddTask(false)
    }

    const nextTasks=()=>{
        if(omitTask.length>0){
            omitTask=omitTask.map(task=>task.id)
        }
        getMoreTask(omitTask)
    }

    return <div className=" rounded-2 mt-2 px-2 ">
        { SelectTasks.length > 0 &&
            <div>
                <label className="form-label">Tareas seleccionadas:</label>
                <div className="d-flex flex-wrap gap-2">
                {
                    SelectTasks.map((task)=>(
                        <div className="d-flex gap-2 p-2 rounded-2 bg-body-secondary align-items-center" key={task.id}>
                            <span>{task.NombreTask}</span>
                            <div>
                                <i className="fa-solid fa-xmark" onClick={()=>deleteSelectTask(task.id)}></i>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        }
        <div className="">
            <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1 d-none d-lg-block">Seleccionar tareas</div>
                <div className="d-flex justify-content-between gap-2 align-items-center">
                    <div>
                        <BarraBusquedaTask omitTask={omitTask}/>
                    </div>

                    <div className="d-flex gap-2">
                        <button className="btn btn-primary" type="button" onClick={()=>{
                                setViewAddTask(true)
                                setViewMessage(false);
                        }}><i className="fa-solid fa-plus text-white"></i>
                        </button>
                        <div className="w-100 d-flex justify-content-end pe-2 ">
                            <button className="btn btn-secondary"  type="button" onClick={()=>{
                                omitTask=omitTask.map(task=>task.id)
                                getTask(omitTask)
                            }}>
                                <i className="fa-solid fa-rotate-right" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border p-2 rounded-2 overflow-y-scroll" id={`sectionTasks${name}`} style={{height:'200px'}}
            ref={containerTasks}>
                    {
                        isLoading ?
                        <div className="w-100 d-flex justify-content-center align-items-center mt-5" style={{height:'100px'}}>
                            <ChargingSpinner/>
                        </div>
                        :ListTasks.length==0 ?<>
                        {
                            viewAddTask && <div className="d-flex flex-nowrap align-items-center justify-content-between px-1 py-1 bg-body-secondary rounded-2" >
                                <div className="d-flex flex-grow-1 me-3">
                                    <input type="checkbox" className=" form-check me-2" disabled></input>
                                    <input type="text" className="form-control bg-body-secondary" placeholder="Ingresa el nombre de la tarea ej... Estudiar para mi examen "
                                    onBlur={AddTaskFast} ref={inputNewTask}></input>
                                </div>
                                {
                                    loadAddTask && <div className="d-flex align-items-center me-2" >
                                        <ChargingSpinner tamaño="sm"/>
                                    </div>
                                }
                            </div>
                        }
                        {
                            ListTasks.length==0 && viewMessage &&
                            <div className="d-flex justify-content-center align-items-center" style={{height:'200px'}} >
                                <div className="text-center">
                                    <p>No se encontró ninguna tarea</p>
                                    <button className="btn btn-primary text-white" onClick={()=>{
                                        setViewAddTask(true)
                                        setViewMessage(false)
                                    }}>Agregar una nueva tarea
                                    </button>
                                </div>
                            </div>
                        }
                        </>

                        :<InfiniteScroll
                            dataLength={ListTasks.length}
                            next={nextTasks}
                            hasMore={hasMore}
                            scrollableTarget={`sectionTasks${name}`}
                            loader={<GrowingSpinner/>}
                        >
                            {
                                viewAddTask && <div className="d-flex flex-nowrap align-items-center justify-content-between px-1 py-1 bg-body-secondary rounded-2" >
                                    <div className="d-flex flex-grow-1 me-3">
                                        <input type="checkbox" className=" form-check me-2" disabled></input>
                                        <input type="text" className="form-control bg-body-secondary" placeholder="Nombre de la tarea"
                                        onBlur={AddTaskFast} ref={inputNewTask}></input>
                                    </div>
                                    {
                                        loadAddTask && <div className="d-flex align-items-center me-2" >
                                            <ChargingSpinner tamaño="sm"/>
                                        </div>
                                    }
                                </div>
                            }

                            {
                            ListTasks
                            .filter((task, index, self) =>index === self.findIndex(t => t.id === task.id))
                            .map((task)=>(
                            <div key={task.id}>
                                <div className="my-2 px-2 py-1 bg-body-secondary rounded-2 d-flex justify-content-between align-items-center">

                                    <TooltipTaskDetail task={task} anchorSelect={`#taskInfo${task.id}`}/>

                                    <div className="d-flex align-items-center">
                                        <input type="checkbox" name="" value={task.id} className=" form-check" id=""
                                        onChange={(e)=>hanleCheckbox(e,task)}
                                        checked={ tasks.includes(task.id) }/>
                                        <span className="ms-2">{task.NombreTask} -</span>
                                    </div>

                                    <div className="d-flex align-items-end flex-grow-1" >
                                        <div className="d-flex gap-1 align-items-center">

                                        <span className="ms-2 d-none d-lg-inline">{task.numPomodoros} pom</span>
                                            <div className="gap-1 d-none d-lg-flex">
                                                {Array.from({ length: task.numPomodoros }).map((_, index) => (
                                                    <i className="fa-solid fa-apple-whole text-primary" key={index}></i>
                                                ))}
                                            </div>

                                        </div>
                                        <strong className="d-none d-lg-inline ms-2">
                                            {task.TimeInterval} min c/u
                                        </strong>
                                    </div>

                                    <div className="d-flex gap-2 align-items-center">
                                        <i className="fa-solid fa-circle-info" id={`taskInfo${task.id}`}></i>
                                        <BtnOpenModalEditTask key={task.id} task={task} contentButton={<i className="fa-solid fa-pen"></i>} returnModal={returnModalCloseModalEdit}/>
                                    </div>

                                </div>
                            </div>
                            ))
                            }
                        </InfiniteScroll>
                    }

            </div>
        </div>
    </div>
}

