import { EllipsisMenu } from "./EllipsisMenu";
import { BtnViewTask } from "./BtnViewTask";

export function Task({task}){

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

    return <div className="bg-body rounded-2 p-3 my-2" >

        <div className="d-flex justify-content-between">
            <h4>{task.NombreTask}</h4>
            <EllipsisMenu task={task}/>
        </div>

        <div className="d-flex  gap-2 align-items-baseline align-items-md-center  flex-column flex-md-row mb-3 ">

            <div className="d-flex gap-2">
                <span >Numero de pomodoros:</span>

                <div className="d-flex gap-2 flex-grow-1 flex-wrap align-items-center">

                    <div className="d-flex flex-wrap gap-1">
                        {Array.from({ length: task.numPomodoros }).map((_, index) => (
                            <i className="fa-solid fa-apple-whole text-primary" key={index}></i>
                        ))}
                    </div>
                    <strong>{task.numPomodoros} pom / <strong>{task.TimeInterval} min</strong></strong>
                </div>
            </div>

        </div>

        <div className="mb-2">
            Duración total de la tarea: {formatearMinutos(task.duration)}
        </div>

        <BtnViewTask idTask={task.id}/>

    </div>
}

