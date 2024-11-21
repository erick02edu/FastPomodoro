import { useContext } from 'react'
import {SelectTask} from './../../Tasks/Components/SelectTask'
import { GroupTaskContext } from '../Context/ContextGroupTask'

export function ModalAddTaskToGroup(){

    const {listTasksAddToGroup,setListTasksAddToGroup,formEditGroup,addTaskToGroup}=useContext(GroupTaskContext)

    const updateTaskAddToGroup=(taskSelect)=>{
        let idTasks=taskSelect.map(task=>task.id)
        setListTasksAddToGroup(idTasks);
    }

    return <div class="modal fade" id="modalAddTaskToGroup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Agregar tareas al grupo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div>
                Seleccione las tareas que deseas agregar a este grupo
                <SelectTask name='taskToGroup' tasks={listTasksAddToGroup} setTask={updateTaskAddToGroup} omitTask={formEditGroup.tasksSelect} returnModalCloseModalEdit='#modalAddTaskToGroup'/>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary text-white"  data-bs-dismiss="modal" onClick={()=>{
            addTaskToGroup(formEditGroup.id,listTasksAddToGroup)
          }}>Agregar tareas</button>
        </div>
      </div>
    </div>
  </div>

}


