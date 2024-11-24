import { createContext, useRef, useState } from "react";
import axios from "axios";
import { Toast } from "bootstrap";
import { useNavigate } from "react-router";

export const taskContext=createContext();

export function ContextTask(props){

    const [section,setSection]=useState('Task');
    const [isLoading,setIsLoading]=useState(true)
    const [ListTasks,setListTasks]=useState([]);
    const btnCerrar=useRef();
    const btnCloseModalEdit=useRef();
    const ToastUpdate=useRef();
    const ToastDelete=useRef();
    const [SelectTasks,setSelectTask]=useState([]);
    const [loadAddTask,setLoadAddTask]=useState(false);
    let navigation=useNavigate();
    const [TaskSelect,setTaskSelect]=useState();
    const [page,setPage]=useState(1)
    const toastAdd=useRef();
    const [busqueda,setBusqueda]=useState('');
    const [hasMore,setHasMore]=useState(true);

    //formulario add task
    const [formTask,setFormTask]=useState({
        name:'',
        numPomodoros:0,
        timeInterval:25,
        timeBreak:5,
        timeBreakLong:10,
        numPomBreakTime:0,
    })

    const [formEditTask,setFormEditTask]=useState({})

    //Validaciones errors
    const [errors,setError]=useState({
        errorIn:'',
        type:'',
        message:'',
    });

    const showToastAdd=()=>{
        let ToastAddTask=new Toast(toastAdd.current)
        ToastAddTask.show();
    }

    const getTask= async(omitTask=[])=>{

        setBusqueda('');
        setIsLoading(true);
        setListTasks([]);
        setPage(1);
        setHasMore(true);

        try{
            const response=await axios.get('/tasksPaginate',{
                params:{
                    omitTask
                }
            })
            setListTasks(response.data.data)
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        }catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false);
        }
    }


    const getMoreTask=async(omitTask=[])=>{
        const nextPage=page+1;
        setPage(prevPage=>prevPage+1);
        try{
            const response=await axios.get('/tasksPaginate',{params:{
                page:nextPage,
                omitTask:omitTask
            }});
            const newTasks=response.data.data;
            setListTasks(prevList=>[...prevList,...newTasks])
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        }
        catch(error){
            console.log(e);
        }
    }

    const searchTask=async(query,omitTask=[])=>{
        setIsLoading(true);
        setPage(1);
        setHasMore(true);
        try {
            const response=await axios.get('/searchTask',{
                params:{
                    query,
                    omitTask
                }
            });
            const tasks=response.data.data;
            setListTasks(tasks);
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const getMoreTaskSearch=async()=>{
        const nextPage=page+1
        setPage(prevPage=>prevPage+1);

        try {
            const response=await axios.get('/searchTask',{params:{query:busqueda,page:nextPage}});
            const newTasks=response.data.data;
            setListTasks(prevTask=>[...prevTask,...newTasks]);
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const hideModalAdd=()=>{
        btnCerrar.current.click();
    }


    const addTask=async(e)=>{
        try {
            const response=await axios.post('/task',formTask)
            hideModalAdd();
            await getTask();
            showToastAdd();
            //Borrar errores
            setError({
                errorIn:'',
                type:'',
                message:'',
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask=async(returnPage)=>{
        try {
            const response=await axios.put(`/task/${formEditTask.id}`,{newTask:formEditTask})
            if(response.status==200){
                await getTask();

                returnPage && navigation(`${returnPage}`)

            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask=async()=>{
        try {
            const response=await axios.delete(`/task/${TaskSelect.id}`)
            setListTasks((prevTask)=>{
                return prevTask.filter(task=>task.id!=TaskSelect.id)
            })

            const toast=new Toast(ToastDelete.current);
            toast.show();

        } catch (error) {
            console.log(error);
        }
    }

    const addTaskFast=async(nameTask)=>{

        setLoadAddTask(true)
        try {
            const response=await axios.post(`/addTaskFast/${nameTask}`);
            return response.data
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoadAddTask(false);
        }
    }

    const addList=(newTask)=>{
        setListTasks(prevTasks=>{
            return [newTask,...prevTasks]
        })
    }

    const getInfoTask=async(id)=>{
        setIsLoading(true)
        try {
            const response=await axios.get('/getInfoTask',{params:{id}})
            if(response.status==200){
               return response.data;
            }
            else{
                return []
            }

        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoading(false)
        }
    }

    return <taskContext.Provider value={{
        addList,
        loadAddTask,
        SelectTasks,
        setSelectTask,
        section,
        setSection,
        isLoading,
        getTask,
        addTask,
        ListTasks,
        formTask,
        setFormTask,
        btnCerrar,
        toastAdd,
        hasMore,
        getMoreTask,
        searchTask,
        busqueda,
        setBusqueda,
        getMoreTaskSearch,
        errors,
        TaskSelect
        ,setTaskSelect,
        deleteTask,
        formEditTask,
        setFormEditTask,
        updateTask,
        btnCloseModalEdit,
        ToastUpdate,
        ToastDelete,
        addTaskFast,
        getInfoTask,
    }}>
        {props.children}
    </taskContext.Provider>

}


