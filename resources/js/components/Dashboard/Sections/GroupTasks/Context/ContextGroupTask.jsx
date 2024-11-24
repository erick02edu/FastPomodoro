import { createContext, useRef, useState } from "react";
import axios from "axios";
import { Toast } from "bootstrap";

export const GroupTaskContext=createContext();

export function ContextGroupTask(props){

    const [ListGroupTask,setListGroupTask]=useState([]);
    const [isLoadingGroup,setIsLoadingGroup]=useState(false);
    const [busqueda,setBusqueda]=useState();
    const [selectGroupTask,setSelectGroupTask]=useState([])
    const [GroupSelect,setGroupSelect]=useState();
    const ToastAddGroup=useRef();
    const ToastDeleteGroup=useRef();
    const [page,setPage]=useState(1);
    const [hasMore,setHasMore]=useState(false)
    const [tasksGroup,setTaskGroup]=useState([]);
    const [isLoadingTaskGroup,setIsLoadingTaskGroup]=useState(false);
    const [UnassociatedTasks,setUnassocietedTasks]=useState([]);
    const [isLoadingTask,setIsLoadingTask]=useState(false);
    const [errorForm,setErrorForm]=useState(null);
    const btnCloseModalAddGroup=useRef();

    const [formGroup,setFormGroup]=useState({
        name:'',
        tasksSelect:[],
    })

    const [formEditGroup,setFormEditGroup]=useState({
        id:0,
        name:'',
        tasksSelect:[],
    });

    const [listTasksAddToGroup,setListTasksAddToGroup]=useState([])

    const [taskAddGroup,setTaskAddGroup]=useState([]);

    const setSelectTask=(newTasks)=>{
        const idTasks=newTasks.map(task=>task.id)
        setFormGroup((prevForm)=>(
            {
                ...prevForm,
                'tasksSelect':idTasks
            }
        ))
    }

    const AddGroupTask=async(closeModal=true)=>{
       if(formGroup.name==''){
            setErrorForm("El nombre no ha sido llenado")
       }
       else if(formGroup.tasksSelect.length==0){
            setErrorForm("Aun no se ha elegido ninguna tarea para el grupo");
       }else{

            try {
                const response=await axios.post('/groupTask',formGroup);

                closeModal && btnCloseModalAddGroup.current.click();
                await getGroupTask();
                showToastAddGroup();
            } catch (error) {
                console.log(error)
            }
       }
    }

    const getGroupTask=async()=>{
        setBusqueda("")
        setPage(1);
        setListGroupTask([]);
        setHasMore(true);
        setIsLoadingGroup(true);

        try {
            const response=await axios.get('/getGroupTask');
            setListGroupTask(response.data.data);
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        } catch (error) {
            console.log(error)
        }
        finally{
            setIsLoadingGroup(false);
        }
    }

    const getNextGroup=async()=>{
        const nextPage=page+1
        setPage(prevPage=>prevPage+1)

        try {
            const response=await axios.get('/getGroupTask',{params:{page:nextPage}});
            const newGroupTask=response.data.data
            setListGroupTask(prevGroup=>[...prevGroup,...newGroupTask]);
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const searchGroup=async(query)=>{

        setIsLoadingGroup(true)
        setPage(1);
        setHasMore(true);

        try {
            const response=await axios.get('/searchGroup',{params:{query}})
            setListGroupTask(response.data.data);
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }

            setIsLoadingGroup(false);
        } catch (error) {
            console.log(error)
        }
    }

    const getNextGroupSearch=async()=>{
        const query=busqueda;
        const nextPage=page+1;
        setPage(prevPage=>prevPage+1);
        try {
            const response=await axios.get('/searchGroup',{params:{query,page:nextPage}})
            const newGroupTask=response.data.data
            setListGroupTask(prevGroup=>[...prevGroup,...newGroupTask]);
            //Ver si hay mas datos
            if(response.data.current_page >= response.data.last_page){
                setHasMore(false);
            }
        } catch (error){
            console.log(error)
        }
    }

    const deleteTaskFromGroup=async(idTask,idGroup)=>{
        try {
            const response=await axios.delete('/removeTask',{params:{idTask,idGroup}})
            setTaskGroup((prevTask)=>{
                return prevTask.filter(task=>task.id!=idTask);
            })
            getUnassociatedTasks();
        } catch (error) {
            console.log(error)
        }
    }

    const getUnassociatedTasks=async(idGroup)=>{
        setIsLoadingTask(true);
        try {
            const response=await axios.get('/getUnassociatedTasks',{params:{idGroup}});
            setUnassocietedTasks(response.data)
            setIsLoadingTask(false);
        } catch (error) {
            console.log(error)
        }
    }

    const addTaskToGroup=async(idGroup,listIdsTasks)=>{

        try {
            const formAddTaskToGroup={
                idGroup:idGroup,
                listTaskAdd:listIdsTasks
            }

            const response=await axios.post('/addTaskToGroup',formAddTaskToGroup)
            let group=response.data
            setFormEditGroup({
                id:group.id,
                name:group.nameGroup,
                tasksSelect:group.tasks
            })

        } catch (error) {
            console.log(error)
        }
    }

    const deleteGroup=async()=>{
        try {
            const response=await axios.delete(`/groupTask/${GroupSelect.id}`)
            setListGroupTask((prevGroup)=>{
                return prevGroup.filter(group=>group.id!=GroupSelect.id);
            })

            showToastDeleteGroup();

        } catch (error) {
            console.log(error);
        }
    }

    const getTaskGroup=async(idGroup)=>{
        setIsLoadingTaskGroup(true);
       try {
            const response=await axios.get(`/getGroupInfo/${idGroup}`)
            let group=response.data
            setFormEditGroup({
                id:group.id,
                name:group.nameGroup,
                tasksSelect:group.tasks
            })
       } catch (error) {
            console.log(error)
       }
       finally{
            setIsLoadingTaskGroup(false);
       }
    }

    const showToastAddGroup=()=>{
        const toast=new Toast(ToastAddGroup.current);
        toast.show()
    }

    const showToastDeleteGroup=()=>{
        const toast=new Toast(ToastDeleteGroup.current);
        toast.show()
    }

    const deleteTaskForGroup=async(idGrupo,idTask)=>{
        let formDelete={
            idGrupo,
            idTask
        }
        try {
            const response=await axios.delete("/deleteTaskGroup",{params:formDelete})
            const newTasks=formEditGroup.tasksSelect.filter(task=>task.id!=idTask);

            setFormEditGroup(prevForm=>{
                return {
                    ...prevForm,
                    "tasksSelect":newTasks
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return <GroupTaskContext.Provider value={{
        ListGroupTask,
        getGroupTask,
        isLoadingGroup,
        formGroup,
        setFormGroup,
        setSelectTask,
        AddGroupTask,
        btnCloseModalAddGroup,
        getNextGroup,
        hasMore,
        searchGroup,
        busqueda,
        setBusqueda,
        getNextGroupSearch,
        GroupSelect,
        setGroupSelect,
        deleteGroup,
        ToastAddGroup,
        ToastDeleteGroup,
        tasksGroup,
        setTaskGroup,
        deleteTaskFromGroup,
        UnassociatedTasks,
        setUnassocietedTasks,
        getUnassociatedTasks,
        isLoadingTask,
        setIsLoadingTask,
        addTaskToGroup,
        getTaskGroup,
        isLoadingTaskGroup,
        selectGroupTask,
        formEditGroup,
        setFormEditGroup,
        taskAddGroup,
        setTaskAddGroup,
        listTasksAddToGroup,
        setListTasksAddToGroup,
        errorForm,
        deleteTaskForGroup
    }}>
        {props.children}
    </GroupTaskContext.Provider>

}


