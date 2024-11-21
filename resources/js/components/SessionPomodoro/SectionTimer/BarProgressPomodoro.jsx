import { useContext } from "react"
import { TimerContext } from "../Context/ContextTimer"

export function BarProgressPomodoro(){

    const {BarProgress,min,seg}=useContext(TimerContext)

    return <>
        <div className="timerPomodoro rounded-circle shadow border d-flex justify-content-center align-items-center text-white" >
            <h2>{String(min).padStart(2,'0')}:{String(seg).padStart(2,'0')}</h2>
        </div>

    {/* <div className="progress-bar"> */}

        {/* <svg height="150" width="150" className="circle" ref={BarProgress}>
            <circle cx="75" cy="75" r="65" stroke="#2196F3" strokeWidth="20" fill="none"/>
        </svg> */}
    {/* </div> */}

    </>
}




