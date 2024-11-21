

import { useContext, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form"
import { taskContext } from "../Context/ContextTask";

export function FormAddTask(){

    let {setFormTask,formTask,addTask,btnCerrar}=useContext(taskContext);
    const {register,handleSubmit,control,formState}=useForm({
        defaultValues:{
            name:"",
            timeInterval:25,
            timeBreak:5,
            timeBreakLong:10,
            numPomodoros:0,
            numPomBreakTime:0
        }
    });

    const formValues = useWatch({control})

    useEffect(()=>{

        if(JSON.stringify(formValues) !== JSON.stringify(formTask)){
            setFormTask(formValues)
        }

    },[formValues])


    return <form onSubmit={handleSubmit(addTask)} >

            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Agregar tarea</h5>
                <button type="button" className="btn-close" ref={btnCerrar} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
                <div>
                    <label className="form-label">Nombre</label>
                    <input type="text" placeholder="Nombre tarea"
                    {...register("name",{
                        required:{
                            value:true,
                            message:"El nombre es obligatorio"
                        }
                    })}
                    name="name" className="form-control"/>
                    {
                        formState.errors.name &&
                        <small className="mt-2 text-danger">{formState.errors.name.message}</small>
                    }
                </div>

                <div>
                    <label className="form-label my-2">
                        Numero de pomodoros
                    </label>
                    <input type="number" className="form-control"
                    {...register("numPomodoros",{
                        required:{
                            value:true,
                            message:"El numero de pomodoros es obligatorio"
                        },
                        validate:value=>value>0 || "La tarea debe tener al menos un pomodoro"
                    })}
                    name="numPomodoros"/>
                    {
                        formState.errors.numPomodoros &&
                        <small className="mt-2 text-danger">{formState.errors.numPomodoros.message}</small>
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
                        name="timeInterval" {...register("timeInterval")} >
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
                        name="timeBreak" {...register("timeBreak")}>
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
                        name="timeBreakLong" {...register("timeBreakLong")}>
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
                <span className="">A los cuantos descansos hacer un descanso largo</span>
                    <input type="number" className=" w-25 form-control"
                    name="numPomBreakTime" {...register("numPomBreakTime")}/>
                </div>
                {/* <pre>
                    {JSON.stringify(formTask,null,2)}
                </pre> */}

            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit"  className="btn btn-primary text-white">Agregar</button>
            </div>

    </form>

}
