import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner";
import { useNavigate } from "react-router-dom";
import { ModalAddTaskSesion } from "./ModalAddTaskSesion";
import { TaskBox } from "../../../Shared/TaskBox";
import { ToastAddTaskSesion } from "../Components/ToastAddTaskSesion";
import { SesionContext } from "../Context/ContextSesion";
import { TaskBreakDown} from "./../../../Shared/TaskBreakdown"


export default function SessionInfo(){

    const {id}=useParams();

    let navigation=useNavigate();

    const {ObtenerInfoSession,InfoSesion,setInfoSesion,load,errorPage,updateOrderTaskSession}=useContext(SesionContext);


    const formatearMinutos=(minutos)=>{

        let min=minutos;

        if(min>=1440){
            var dias=Math.floor(min/1440);
            min=min-(dias*1440);
        }

        if(min>=60){
            var horas= Math.floor(min/60);
            min=min-(horas*60);
        }





        return ` ${ dias>0 ? `${dias} dia ` : "" } ${ horas>0 ? `${horas} hora(s) ` : "" } ${ min>=0 ? `${min} minutos` : ""} `

    }

    useEffect(()=>{

        ObtenerInfoSession(id);
    },[id])



    const getPageTask=(idTask)=>{
        navigation(`/home/task/${idTask}`)
    }

    return <>
        {
            load==true ?
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <ChargingSpinner/>
                </div>
            : errorPage?
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <img src="https://img.freepik.com/vector-premium/personaje-dibujos-animados-cerebro-agotado-lindo-aislado-vector_656853-388.jpg"
                    className="rounded-circle" style={{height:"40vh"}}></img>
                     <h2>Upps ... parece que ocurrió un error</h2>
                </div>

            </div>
            :<div className="w-100">

                <ModalAddTaskSesion sesion={InfoSesion}/>
                <ToastAddTaskSesion/>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
                    <div>
                        <span className="fs-2">{InfoSesion?.name}</span>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-2 mt-md-0" disabled={ !InfoSesion?.tasks?.length>0} >
                            <a href={`/sessionPomodoro/${InfoSesion?.id}`} target="_blank" className="text-white text-decoration-none">
                                <i className="fa-solid fa-play pe-2"></i>
                                <span>Iniciar sesión</span>
                            </a>
                        </button>
                    </div>
                </div>

                {
                    InfoSesion?.tasks?.length==0 &&
                    <div className="alert alert-danger my-3" role="alert">
                        Se necesita al menos una tarea para comenzar una sesión
                    </div>
                }

                <div className="mt-2 d-flex flex-column gap-3 mb-2">
                    <strong>Orden de ejecución de las tareas</strong>
                    <div className="d-flex flex-column gap-2 border rounded-2 p-2">
                    {
                        InfoSesion?.tasks?.map((task)=>(
                            <TaskBox key={task.id} task={task} idSesion={id}/>
                        ))
                    }
                    </div>


                    <button className="p-2 bg-opacity-10 btn btn-outline-secondary text-opacity-50 rounded-3" style={{border:'1px dashed'}}
                    data-bs-toggle="modal" data-bs-target="#ModalAddTaskSesion">
                        <div className="d-flex flex-column gap-1 py-2 justify-content-center align-items-center">
                            <div>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div>Agregar mas tareas</div>
                        </div>
                    </button>

                    <div className="d-flex w-100">
                       <strong>Duración de la sesión: </strong> <i> { formatearMinutos(InfoSesion.totalTimeSeg) } </i>
                    </div>

                </div>

                <h5 className="mt-5">Desglose de sesión</h5>
                {

                    InfoSesion?.tasks?.map((task,index)=>(
                        <div class="accordion accordion-flush my-1" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header bg-body-secondary">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#accordionTask_${task.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <li> <strong> {task.NombreTask}</strong></li>
                                </button>
                                </h2>
                                <div id={`accordionTask_${task.id}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <TaskBreakDown key={task.id} task={task}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }



            </div>

        }


    </>
}


