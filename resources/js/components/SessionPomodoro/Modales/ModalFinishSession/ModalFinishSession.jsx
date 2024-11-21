import { useContext } from "react"
import { TimerContext } from "../../Context/ContextTimer"
import { BtnFinishSession } from "../../shared/BtnFinishSession";

export function ModalFinishSession(){

    const {ModalFinishSession}=useContext(TimerContext)

    return <div ref={ModalFinishSession} className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header text-d-flex justify-content-center">
                <h5 className="modal-title " id="staticBackdropLabel">Terminar la sesión</h5>
                </div>
                <div className="modal-body">


                    <div className=" text-center">
                        <div>Felicidades has cumplido todas las tareas</div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={`${import.meta.env.VITE_API_URL}/img/CerebroFeliz.png`} style={{height:'40vh'}}></img>
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <BtnFinishSession responsive={false} />
                </div>
            </div>
        </div>
    </div>
}





