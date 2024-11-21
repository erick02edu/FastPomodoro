import { useContext } from "react"
import { GroupTaskContext } from "../Context/ContextGroupTask"
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner"
import { GroupTask } from "../Components/GroupTask"
import InfiniteScroll from "react-infinite-scroll-component"
import { GrowingSpinner } from "../../../../Shared/GrowingSpinner"
import { ConfimDeleteGroup } from "../Components/ConfirmDeleteGroup"
import { ToastMessage } from "../Components/ToastMessage"


export function ContentGroupTask(){

    const {ListGroupTask,hasMore,isLoadingGroup,getNextGroup,getNextGroupSearch,busqueda,ToastAddGroup,ToastDeleteGroup}=useContext(GroupTaskContext)

    const nextGroup=()=>{
        if(busqueda==""){
            getNextGroup();
        }
        else{
            getNextGroupSearch();
        }
    }

    return <div>


            <ConfimDeleteGroup/>
            <ToastMessage nameRef={ToastAddGroup} title={"Grupo agregado"} message={"Se ha generado el grupo correctamente"}/>
            <ToastMessage nameRef={ToastDeleteGroup} title={"Grupo eliminado"} message={"Se ha eliminado el grupo correctamente"}/>


            {
                isLoadingGroup?
                <div className="w-100 d-flex justify-content-center align-items-center mt-5" style={{height:'40vh'}}>
                    <ChargingSpinner/>
                </div>
                :ListGroupTask.length==0 ?
                <div className="d-flex justify-content-center align-items-center" style={{height:"55vh"}}>
                    <div className="w-50 d-flex flex-column gap-2 align-items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmZnW_UDovG1hw6CQZbb4U_gmA_zRq1fFoQ&s" style={{height:"40vh"}}
                        className="rounded-circle">
                        </img>
                        <span>No se encontró ningún grupo de tareas</span>
                    </div>
                </div>
                :<div className=" d-flex flex-column">
                    <InfiniteScroll
                        dataLength={ListGroupTask.length}
                        next={nextGroup}
                        loader={<GrowingSpinner/>}
                        hasMore={hasMore}
                        endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>No hay mas datos</b>
                        </p>
                        }
                    >
                        {
                            ListGroupTask.map((group)=>(

                                <GroupTask key={group.id} group={group}/>
                            ))
                        }
                    </InfiniteScroll>
                </div>
            }
    </div>
}


