import { useContext, useEffect } from "react"
import { createSessionContext } from "../../Context/ContextCreateSession";
import { CarouselItemNameSesion } from "../Components/CarouseItemNameSesion";
import { CarouselItem2 } from "../Components/CarouselItem2";
import { CarouselGroupTask } from "../Components/CarouselGroupTask";
import { CarouselTask } from "../Components/CarouselTask";
import { ContextTask, taskContext } from "../../Sections/Tasks/Context/ContextTask";
import { GroupTaskContext } from "../../Sections/GroupTasks/Context/ContextGroupTask";
import { ModalAddGroup } from "../../Sections/GroupTasks/Components/ModalAddGroup";

const ModalCreateSession=()=>{

    const {numItemsCarousel,itemCarouselCurrent,activeBtnNext,nextItemCarrousel,backItemCarousel,optionTask,crearNewSession,formSesion,btnBackCarousel,modalCreateSesion}=useContext(createSessionContext);


    const validations=()=>{
        return !formSesion.ListTask.length>0 && !formSesion.GroupTask.length>0
    }

    return <div className="modal fade" id="ModalCreateSession" ref={modalCreateSesion} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header d-flex flex-column gap-2">
            <div className="w-100 d-flex justify-content-between align-items-center py-2">
                <div>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Crea una nueva sesión de estudio</h1>
                </div>

                <div className="d-flex gap-2 align-items-center">
                    <span>{itemCarouselCurrent}/{numItemsCarousel}</span>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

            </div>
            <div className="w-100 rounded-pill w-100 mx-3 bg-transparent shadow border" style={{height:'8px'}}>
                <div className="bg-primary h-100 rounded-pill" style={{width:`${(itemCarouselCurrent/numItemsCarousel)*100}%`}}>
                </div>
            </div>
        </div>
        <div className="modal-body p-0">
            {/* <form action="#" className="m-0"> */}
                <div id="carouselExampleControlsNoTouching" className="carousel" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner overflow-y-auto " style={{height:'50vh'}}>
                        <CarouselItemNameSesion/>
                        <CarouselItem2/>
                        {
                            optionTask==1 ?

                                <CarouselTask/>


                            : optionTask==2 ?
                            <>
                                <ContextTask>
                                    <CarouselGroupTask/>
                                </ContextTask>
                            </>

                            :<></>
                        }
                    </div>
                </div>

            {/* </form> */}
        </div>
        <div className="modal-footer p-0">
            {
                itemCarouselCurrent!=1 ?
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev" onClick={backItemCarousel} ref={btnBackCarousel}>
                        volver
                    </button>
                : <></>
            }
            {
                numItemsCarousel!=itemCarouselCurrent ?
                    <button type="button" className="btn btn-primary text-white"  data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next" onClick={nextItemCarrousel} disabled={!activeBtnNext}>
                        Siguiente
                    </button>
                :   <button className="btn btn-primary text-white" onClick={crearNewSession} data-bs-dismiss="modal" disabled={validations()}>
                        Crear sesión
                    </button>
            }
        </div>
      </div>
    </div>
  </div>
}


export default ModalCreateSession
