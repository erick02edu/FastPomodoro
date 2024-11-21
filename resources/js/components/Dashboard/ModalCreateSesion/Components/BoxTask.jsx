import { useContext, useEffect, useRef, useState } from "react";
import { createSessionContext } from "../../Context/ContextCreateSession";

export function BoxTask({task}){

    let i=0;

    const {setFormSesion,formSesion}=useContext(createSessionContext)

    const InputTask=useRef();
    const [isCheck,setIsCheck]=useState(false)

    useEffect(()=>{

        return ()=>{
            setFormSesion((prevForm)=>({
                ...prevForm,
                ListTask:[]
            }))
        }
    },[])

    useEffect(()=>{

        if(isCheck==true){
            setFormSesion((prevForm)=>({
                ...prevForm,
                ListTask:[...prevForm.ListTask,task.id]
            }))
        }else{
            setFormSesion((prevForm) => ({
                ...prevForm,
                ListTask: prevForm.ListTask.filter((tarea) => tarea !== task.id),
            }));
        }

    },[isCheck])


    const cambio=(e)=>{
        setIsCheck(preCheck=>!preCheck)
    }


    return <tr>

        <th scope="row">
            <input type="checkbox" className="form-check-input"  id="" value={task.id} checked={isCheck} onChange={cambio}/>
        </th>

        <td>{task.NombreTask}</td>
        <td>{task.TimeInterval}</td>
        <td>
            <div className="d-flex gap-2 align-items-center">
                {Array.from({ length: task.numPomodoros }).map((_, index) => (
                    <i className="fa-solid fa-apple-whole text-primary" key={index}></i>
                ))}
                <span>{task.numPomodoros}</span>
            </div>
        </td>
        <td>{task.breakTime}</td>
    </tr>
}
