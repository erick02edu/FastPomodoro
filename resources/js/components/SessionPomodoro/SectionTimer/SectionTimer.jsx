import { useContext } from "react";
import { TimerContext } from "../Context/ContextTimer";
import { BarProgressPomodoro } from "./BarProgressPomodoro";
import { TaskContext } from "../Context/ContextTask";

export function SectionTimer(){

    const {min,seg,duracionSeg,pomoComplet}=useContext(TimerContext);
    const {TareaActual}=useContext(TaskContext);

    return <div className="bg-body text-body shadow-lg  py-4 contentTimer px-3" style={{width:"40vh"}}>
        {/* <div className='d-flex justify-content-center flex-nowrap'>
            <h6>Tiempo restante del pomodoro</h6>
        </div> */}

        <div className="w-100 d-flex justify-content-center mt-2" style={{height:'155px'}}>
            {/* <div className="timerPomodoro rounded-circle border d-flex justify-content-center align-items-center text-white" >
                <h2>{String(min).padStart(2,'0')}:{String(seg).padStart(2,'0')}</h2>
            </div> */}
            <BarProgressPomodoro/>
        </div>

        {/* <div className="w-100 px-3 my-3">
            <div className="w-100 bg-primary rounded-2" style={{height:"10px"}}>

            </div>
        </div> */}


        {/* <div className="d-flex justify-content-center">
            <h2>{String(min).padStart(2,'0')}:{String(seg).padStart(2,'0')}</h2>
        </div> */}

        <div className="d-flex justify-content-center flex-column align-items-center">
            <strong className="mt-4 mb-2 text-uppercase">Tarea actual:</strong>
            <span className="mb-3">{TareaActual.NombreTask}</span>
            <div className="d-flex gap-2">

                {Array.from({ length: pomoComplet }).map((_, index) => (
                    <i className="fa-solid fa-apple-whole text-primary" style={{opacity:'30%'}} key={index}></i>
                ))}
                {Array.from({ length: TareaActual.numPomodoros-pomoComplet }).map((_, index) => (
                    <i className="fa-solid fa-apple-whole text-primary" key={index}></i>

                ))}
            </div>


        </div>
{/*
        <div className="d-flex d-md-none justify-center ">
          <BtnCompletTask/>
        </div>

        <div className="d-flex d-md-none justify-center ">
            <BtnChangeTask/>
        </div> */}
    </div>

}


