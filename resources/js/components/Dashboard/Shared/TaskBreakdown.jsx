


export function TaskBreakDown({task}){

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

    return <>
         {Array.from({ length: task.numPomodoros }).map((_, index) => (
                <>
                    <strong>Pomodoro {index+1} - {task.TimeInterval} min</strong>
                    <p className="ms-4">

                        {
                            (index+1)==task.numPomodoros ?
                            <></>
                            :(index+1) % (task.numPomoBreakTime+1)==0 && task.numPomoBreakTime!=0 ?
                            <>
                                <span className="text-danger"> Descanso de {task.breakTimeLong} min</span>
                            </>
                            :
                            <>
                                <span className="text-warning"> Descanso de {task.breakTime} min</span>
                            </>
                        }
                    </p>
                </>
            ))}
        <hr></hr>
        <strong>Tiempo total de la tarea:</strong> <strong className="text-success">{formatearMinutos(task.duration)}</strong>
    </>
}


