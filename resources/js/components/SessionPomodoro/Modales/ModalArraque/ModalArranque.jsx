
import { useContext } from "react";
import { TimerContext } from '../../Context/ContextTimer';

export function ModalArranque(){

    const { reanudarPomodoro }=useContext(TimerContext)

    return<>
    <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content bg-body text-body">
                <div className="modal-header border-body m-auto">
                    <strong className=" fs-3">Todo esta listo</strong>
                </div>
                <div className="modal-body d-flex justify-content-center align-items-center flex-column w-100 " style={{height:'60vh'}}>
                    <img src={`${import.meta.env.VITE_API_URL}/img/CerebroListo.png`} alt="error" className='w-50' style={{height:'38vh'}}/>
                    <p> Da click en empezar cuando estés listo</p>
                </div>
                <div className="modal-footer border-body d-flex justify-content-center">
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary text-white"
                    onClick={ reanudarPomodoro}>
                        Empezar sesión
                    </button>
                </div>
            </div>
        </div>
    </div>

  </>
}


