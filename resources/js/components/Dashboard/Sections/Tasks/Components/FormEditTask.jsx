import { useContext } from "react"
import { taskContext } from "../Context/ContextTask"

export function FormEditTask(){

    const {formEditTask,setFormEditTask} =useContext(taskContext)

    const handleForm=(e)=>{
        setFormEditTask((prevForm)=>(
            {
                ...prevForm,
                [e.target.name]:e.target.value
            }
        ))
    }

    return <>
        <div>
            <small className="form-label">Nombre</small>
            <input type="text" placeholder="Nombre tarea" value={formEditTask?.NombreTask}
            onChange={handleForm} name="NombreTask" className="form-control"/>
        </div>

        <div>
            <small className="form-label my-2">
                Numero de pomodoros
            </small>
            <input type="number" className="form-control"
            name="numPomodoros" value={formEditTask?.numPomodoros} onChange={handleForm} />
        </div>

        <small className="form-label mt-1">Tiempos</small>
        <br />

        <div className="d-flex justify-content-between w-100 gap-4 flex-wrap my-2">

            <div className="d-flex gap-2 align-items-center">
                <small className="form-label">
                    Pomodoro
                </small>
                <select className="form-select"
                name="TimeInterval" value={formEditTask?.TimeInterval} onChange={handleForm} >
                    <option value={1}>1 min</option>
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
                name="breakTime" value={formEditTask?.breakTime} onChange={handleForm}>
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
                    name="breakTimeLong" value={formEditTask?.breakTimeLong} onChange={handleForm}>
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
            <span className="">A los cuantos descansos se debe hacer un descanso largo</span>
            <input type="number" className=" w-25 form-control"
            name="numPomoBreakTime" value={formEditTask?.numPomoBreakTime} onChange={handleForm}/>
        </div>
    </>
}




