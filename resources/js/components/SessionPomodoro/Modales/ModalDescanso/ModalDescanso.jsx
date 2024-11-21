import { useContext, useEffect, useRef } from "react"
import { TimerContext } from "../../Context/ContextTimer"


export function ModalDescanso(){

    const {min,seg,barBreakTime,modalDescansoRef,reanudarPomodoro}=useContext(TimerContext)


    return <>
    <div className="modal fade" ref={modalDescansoRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-body text-body">
                <div className="modal-header border-body m-auto">
                    <span className=" fs-3">Hora del descanso</span>
                </div>
                <div className="modal-body px-5 d-flex justify-content-center flex-column w-100" style={{height:'60vh'}}>

                    <div className="d-flex justify-content-center align-items-center">
                        <img src={`${import.meta.env.VITE_API_URL}/img/cerebro_meditando.png`}  style={{height:"30vh"}} alt="error" ></img>
                    </div>

                    <div className="d-flex flex-column gap-1 align-items-center">
                        <h1>{String(min).padStart(2,'0')}:{String(seg).padStart(2,'0')}</h1>

                        <div className="w-100 border rounded-pill border-primary ">
                            <div className="bg-primary h-100 py-1 barBreak" ref={barBreakTime}>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="modal-footer border-body d-flex justify-content-center">

                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary text-white"
                    onClick={ reanudarPomodoro } id="btnBreakTime" >
                        Saltar descanso
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
}
