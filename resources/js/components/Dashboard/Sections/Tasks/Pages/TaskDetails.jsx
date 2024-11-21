import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { taskContext } from "../Context/ContextTask";
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner";
import { FormEditTask } from "../Components/FormEditTask";
import { BtnUpdateTask } from "../Components/BtnUpdateTask";

export default function TaskDetails(){

    const {id}=useParams();

    const {getInfoTask,setFormEditTask,isLoading}=useContext(taskContext);

    const getInfo=async()=>{
        const taskEdit=await getInfoTask(id)
        setFormEditTask(taskEdit);
    }

    useEffect(()=>{
        getInfo();
    },[])

    return <div>
        {
            isLoading ?<div className="w-100 d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
                <ChargingSpinner/>
            </div>
            : <div className="">
                <h4>Editar información</h4>
                <div className="bg-body-tertiary p-3 rounded-2 border mt-3">
                    <FormEditTask/>

                    <div className="my-2">
                        <BtnUpdateTask returnPage={'/home/task'}/>
                    </div>
                </div>

            </div>
        }
    </div>
}





