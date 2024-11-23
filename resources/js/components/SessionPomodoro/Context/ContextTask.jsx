import { createContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Modal } from "bootstrap";

export const TaskContext=createContext()

export function ContextTask(props){

    let [TareaActual,setTareaActual]=useState(props.data.tasks[0])
    let [ListTaskPending,setListTaskPending]=useState(props.data.tasks)
    let [ListTaskComplet,setListTaskComplet]=useState([]);


    let initialTaskId = props.data.tasks[1]?.id || props.data.tasks[0]?.id || null;
    let [nextTask,setNextTask]=useState(initialTaskId )
    let modalChangeTask=useRef();


    const createTask=()=>{
        if(ListTaskPending.length>0){
            var idMax=Math.max(...ListTaskPending.map(task => task.id));
        }
        else{
            var idMax=0;
        }
        var newTask={
            id: idMax+1,
            NombreTask:'new Task'
        }
        setListTaskPending(prevList => [...prevList, newTask]);
    }

    const UpdateTask=(newTaskName,idTask)=>{
        var idTaskUpdate=ListTaskPending.findIndex(task=>task.id==idTask)
        ListTaskPending[idTaskUpdate].name=newTaskName
        setListTaskPending(ListTaskPending)
    }


    const deleteTask=(idTask)=>{
        setListTaskPending(previewList=>{
            const newArray=previewList.filter(task => task.id != idTask)

            return newArray;
        })

    }

    const changeTaskCurrent=(taskId)=>{
        //Obtener la tarea actual
        const newTareaActual=ListTaskPending.find(task=>task.id==taskId)
        //Actualizar estado
        setTareaActual(newTareaActual);

    }

    const OpenChangeTask=()=>{
        var ModalChangeTask = new Modal(modalChangeTask.current);
        ModalChangeTask.show()
    }

    const MarkTaskComplet=(idTask)=>{

        //Obtener tarea a mover
        let taskChange=ListTaskPending.find(task=>task.id==idTask)

        //Eliminar de las tareas pendiente
        let newTaskPending = ListTaskPending.filter(task => task.id != idTask);
        //Agregarla a las tareas completadas
        let newTaskComplet = [...ListTaskComplet, taskChange];

        //Actualizar estados
        setListTaskPending(newTaskPending);
        setListTaskComplet(newTaskComplet);

    }

    const deleteTaskComplet=(idTask)=>{
        setListTaskComplet(previewList=>{
            const newArray=previewList.filter(task => task.id != idTask)
            return newArray;
        })
    }

    return <TaskContext.Provider value={{
        ListTaskPending,
        ListTaskComplet,
        createTask,
        UpdateTask,
        deleteTask,
        MarkTaskComplet,
        deleteTaskComplet,
        TareaActual,
        setTareaActual,
        setListTaskPending,
        changeTaskCurrent,
        modalChangeTask,
        OpenChangeTask,
        nextTask,
        setNextTask
    }}>
        {props.children}
    </TaskContext.Provider>

}


