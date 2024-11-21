import { useContext } from "react"
import { createSessionContext } from "../../Context/ContextCreateSession";

export function OptionTask({numOption,nameOption}){

    const {optionTask,setOptionTask}=useContext(createSessionContext);

    const ChekOption=()=>{
        setOptionTask(numOption)
    }
    const UnCheckOption=()=>{
        setOptionTask(null) 
    }

    

    return  <button type="button" className={`${optionTask==numOption ? 'bg-primary text-white': 'bg-body-secondary'} text-start border py-2 px-3 rounded-2`}
    onClick={()=>{ optionTask==numOption ? UnCheckOption() : ChekOption() }}>
        {nameOption}
    </button>
}
