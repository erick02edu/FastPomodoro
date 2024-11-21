import { useContext, useState } from "react"
import axios from "axios"
import { taskContext } from "../Context/ContextTask"
import { FormAddTask } from "./FormAddTask";

export function ModalAddTask(){



    // const {formTask,setFormTask,addTask,btnCerrar,errors}=useContext(taskContext);


    // const handleForm=(e)=>{

    //     setFormTask((prevForm)=>({
    //         ...prevForm,
    //         [e.target.name]:e.target.value,
    //     })
    //     )
    // }

    return <>
    <div className="modal fade" id="ModalAddTask" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg"  >
                <div className="modal-content">
                    <FormAddTask/>

                    {/* <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Agregar tarea</h5>
                        <button type="button" className="btn-close" ref={btnCerrar} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                            <div>
                                <label className="form-label">Nombre</label>
                                <input type="text" placeholder="Nombre tarea" value={formTask.name}
                                onChange={handleForm} name="name" className="form-control"/>
                                {
                                    errors.errorIn=='name' &&
                                    <small className="mt-2 text-danger">{errors.message}</small>
                                }
                            </div>

                            <div>
                                <label className="form-label my-2">
                                    Numero de pomodoros
                                </label>
                                <input type="number" className="form-control"
                                name="numPomodoros" value={formTask.numPomodoros} onChange={handleForm} />
                                {
                                    errors.errorIn=='numPomodoros' &&
                                    <small className="mt-2 text-danger">{errors.message}</small>
                                }
                            </div>


                            <label className="form-label mt-2">Tiempos</label>
                            <br />
                            <div className="d-flex justify-content-between w-100 gap-4 flex-wrap my-2">

                                <div className="d-flex gap-2 align-items-center">
                                    <label className="form-label">
                                        Pomodoro
                                    </label>
                                    <select className="form-select"
                                    name="timeInterval" value={formTask.timeInterval} onChange={handleForm} >
                                        <option value={5}>5 min</option>
                                        <option value={10}>10 min</option>
                                        <option value={15}>15 min</option>
                                        <option value={25}>25 min</option>
                                        <option value={35}>35 min</option>
                                    </select>
                                </div>


                                <div className="d-flex gap-2 align-items-center">
                                    <label className="form-label">
                                        Descanso
                                    </label>
                                    <select className="form-select" id=""
                                    name="timeBreak" value={formTask.timeBreak} onChange={handleForm}>
                                        <option value="1">
                                            1 min
                                        </option>
                                        <option value="2">
                                            2 min
                                        </option>
                                        <option value="5">
                                            5 min
                                        </option>
                                        <option value="10">
                                            10 min
                                        </option>
                                        <option value="15">
                                            15 min
                                        </option>
                                    </select>
                                </div>

                                <div className="d-flex gap-2 align-items-center">

                                    <div >
                                        <label className="form-label">Descanso largo</label>
                                    </div>

                                    <div>
                                    <select className="form-select" id=""
                                    name="timeBreakLong" value={formTask.timeBreakLong} onChange={handleForm}>
                                        <option value="10">
                                            10 min
                                        </option>
                                        <option value="15">
                                            15 min
                                        </option>
                                        <option value="20">
                                            20 min
                                        </option>
                                        <option value="25">
                                            25 min
                                        </option>
                                    </select>
                                    </div>

                                </div>

                            </div>

                            <div className="d-flex gap-3 flex-wrap align-items-center my-3">
                            <span className="">A los cuantos pomodoros hacer el descanso largo</span>
                                <input type="number" className=" w-25 form-control"
                                name="numPomBreakTime" value={formTask.numPomBreakTime} onChange={handleForm}/>
                            </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={addTask}  className="btn btn-primary text-white">Agregar</button>
                    </div> */}
                </div>
        </div>
    </div>

    </>
}



