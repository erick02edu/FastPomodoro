import { createContext, useEffect } from "react";
import { useState,useRef } from "react";
import axios from "axios";
import { Toast } from "bootstrap";

export const SesionContext=createContext()

export function ContextSesion(props){
    const [ListSesion,setListSesion]=useState([]);
    const [load,setLoad]=useState(true)
    const [page,setPage]=useState(0);
    const [hasMore,setHasMore]=useState(true); //indica si hay mas registros
    const [sesionSelect,setSesionSelect]=useState(0);
    const [textSearch,setTextSearch]=useState('');
    const [editName,setEditName]=useState(false);
    const refToastAddTaskSesion=useRef()
    const toastRename=useRef();
    const toastDelete=useRef();
    const [InfoSesion,setInfoSesion]=useState([]);
    const [errorPage,setErrorPage]=useState(false)

    const ObtenerSesiones=()=>{
        setLoad(true);
        let nextPage=page+1;
        setPage(prevPage=>prevPage+1);

        axios.get('/getSesions',{ params: {page:nextPage} } )
        .then(response=>{
            const newSessions=response.data.data;
            setListSesion(prevSession  => [...prevSession, ...newSessions])

            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        })
        .catch(error=>{
            console.log(error)
            setLoadingMore(false);
        })
        .finally(()=>{
            setLoad(false)
        })
    }

    const ObtenerInfoSession=async(id)=>{
        setLoad(true);
        try {
            const response=await axios.get(`/getSesionInfo/${id}`)
            if(response.data==''){
                setErrorPage(true);
            }else{
                setInfoSesion(response.data);
            }
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoad(false)
        }
    }

    const updateOrderTaskSession=async(idSesion,listTasks)=>{
        listTasks=listTasks.map(task=>task.id);
        const formUpdateOrder={
            idSesion,
            listTasks,
        }
        try {
            const response=await axios.put("/updateTaskOrder",formUpdateOrder);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    const moveUpTask=(id)=>{
        //Obtener indice
        const index=InfoSesion.tasks.findIndex(sesion=>sesion.id===id);
        let start=index-1;

        if(start<0){
            start=InfoSesion.tasks.length-1;
        }

        const [element] = InfoSesion.tasks.splice(index, 1);

        setLoad(InfoSesion.tasks.splice(start,0,element))
        updateOrderTaskSession(InfoSesion.id, InfoSesion.tasks)
    }

    const moveDownTask=(id)=>{
        //Ontener indice
        const index=InfoSesion.tasks.findIndex(sesion=>sesion.id===id);

        let start=index+1;

        if(start>=InfoSesion.tasks.length){
            start=0;
        }

        const [element] = InfoSesion.tasks.splice(index, 1);

        setLoad(InfoSesion.tasks.splice(start,0,element))
        updateOrderTaskSession(InfoSesion.id, InfoSesion.tasks)
    }

    const renameSesion=async (id,newName)=>{
        try {
            const response=await axios.get('/renameSesion',{ params:{id,newName}})
            //Mostrar toast
            showToastRename();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSesion=async()=>{
        try {
            const response= await axios.delete(`/sesion/${sesionSelect.id}`)
            setListSesion((prevList)=>{
                return prevList.filter(sesion=>sesion.id!=sesionSelect.id)
            })
            showToastDelete();
            setSesionSelect();
        } catch (error) {
            console.log(error)
        }
    }

    const resetValuePagination=()=>{
        setPage(1);
        setHasMore(true);
    }

    const searchSesion=async(query)=>{
        setLoad(true)
        //Reiniciar valores de paginacion
        resetValuePagination();
        try {
            const response=await axios.get('/searchSesion',{params:{query,page:1 } })
            setListSesion(response.data.data)
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoad(false);
        }
    }

    const getMoreSessionSearch=async (query)=>{
        let nextPage=page+1;
        setPage(prevPage=>prevPage+1);
        try {
            const response = await axios.get('/searchSesion', { params: { query, page: nextPage } });
            const newSessions=response.data.data;
            setListSesion(prevSession  => [...prevSession, ...newSessions])
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateDurationTask=(duration)=>{
        setInfoSesion(prevInfoSesion=>{
            return {
                ...prevInfoSesion,
                "totalTimeSeg":duration
            }
        })
    }

    const addTasksToSesion=async(idSesion,ListTaskAddSesion)=>{
        const formAddTaskSesion={
            'idSesion':idSesion,
            'tasks':ListTaskAddSesion
        }
        try {
            const response=await axios.post('/addTaskSesion',formAddTaskSesion);
            let newDuration=response.data;
            updateDurationTask(newDuration)
            if(response.status==200){
                showToastAddTaskSesion();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTaskSesion=async(idSesion,idTask)=>{

        const formDelete={
            idSesion,
            idTask
        }

        try {
            const response=await axios.delete("/deleteTaskSesion",{params:formDelete})

            if(response.status==200){

                let newTasks=InfoSesion.tasks.filter(task=>task.id!=idTask);

                let newDuration=response.data;

                setInfoSesion(prevInfoSesion=>{
                    return {
                        ...prevInfoSesion,
                        "totalTimeSeg":newDuration,
                        "tasks":newTasks,
                    }
                })

            }
        } catch (error) {
            console.log(error)
        }
    }

    const showToastRename=()=>{
        const toast=new Toast(toastRename.current);
        toast.show();
    }

    const showToastDelete=()=>{
        const toast=new Toast(toastDelete.current);
        toast.show();
    }

    const showToastAddTaskSesion=()=>{
        const toast=new Toast(refToastAddTaskSesion.current);
        toast.show()
    }

    return <SesionContext.Provider value={{
        ListSesion,
        ObtenerSesiones,
        load,
        hasMore,
        sesionSelect,
        setSesionSelect,
        renameSesion,
        toastRename,
        toastDelete,
        deleteSesion,
        searchSesion,
        textSearch,
        setTextSearch,
        setListSesion,
        setPage,
        setLoad,
        setHasMore,
        getMoreSessionSearch,
        editName,
        setEditName,
        refToastAddTaskSesion,
        addTasksToSesion,
        ObtenerInfoSession,
        InfoSesion,
        errorPage,
        moveUpTask,
        moveDownTask,
        updateOrderTaskSession,
        setInfoSesion,
        deleteTaskSesion
    }}>
        {props.children}
    </SesionContext.Provider>
}


