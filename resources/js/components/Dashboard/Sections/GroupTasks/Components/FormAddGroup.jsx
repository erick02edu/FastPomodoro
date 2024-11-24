import { useContext } from "react"
import { GroupTaskContext } from "../Context/ContextGroupTask";
import { SelectTask } from "../../Tasks/Components/SelectTask";

export function FormAddGroup(){

    const {formGroup,setFormGroup,setSelectTask,errorForm}=useContext(GroupTaskContext)

    const handleInput=(e)=>{
        setFormGroup( (prevForm) =>(
            {
                ...prevForm,
                [e.target.name]:e.target.value
            }
        ))
    }

    return <>
        <div className="">
            <label className="form-label">Nombre del grupo</label>
            <input type="text" placeholder="Nombre grupo ..." value={formGroup.name}
            onChange={handleInput} name="name" className="form-control"  />
        </div>

        <SelectTask name="addGroup" tasks={formGroup.tasksSelect} setTask={setSelectTask}/>

        {   errorForm && <span className="text-danger">
            {errorForm}
        </span>}
    </>
}
