
import { Tooltip } from "react-tooltip"

export function TooltipTaskDetail({task,anchorSelect, place="top-end",clickeable=true}){

    return  <Tooltip anchorSelect={anchorSelect} place={place} clickable={clickeable}>
    <h6><strong>{task.NombreTask}</strong> </h6>
    <div className=" d-flex gap-2 ">
        <small>Tiempo:{task.TimeInterval} min</small>
        <small>Descansos:{task.breakTime} min</small>
        <small>Pomodoros:{task.numPomodoros} pom</small>
        <small>Descanso largo:{task.breakTimeLong} min</small>
        <small>Descanso largo cada {task.numPomoBreakTime} pomodoro(s)</small>
    </div>
</Tooltip>

}




