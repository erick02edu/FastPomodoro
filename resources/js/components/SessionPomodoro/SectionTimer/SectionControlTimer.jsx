import { useContext } from "react"
import { TimerContext } from "../Context/ContextTimer"

export function SectionControlTimer(){

    const {Pause,pauseState,activeBtnPause}=useContext(TimerContext)

    return <>
        <div className='d-flex justify-content-between gap-2'>
            <button className='bg-body text-body py-2 rounded-2 w-100 border d-flex justify-content-center'
            onClick={Pause} disabled={!activeBtnPause}>
                { pauseState ? <>Continuar</> : <>Pause</>}
            </button>
        </div>
    </>

}

