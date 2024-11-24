import { createSessionContext } from "../../Context/ContextCreateSession"
import { OptionTask } from "./OptionTask"
import { useContext, useEffect, useState } from "react"

export function CarouselItem2(){

    const [prevEffect,setPrevEffect]=useState(0);
    const {optionTask,validationOption}=useContext(createSessionContext)

    useEffect(()=>{
        prevEffect > 0 &&  validationOption()
        setPrevEffect(antPrevEffect=>antPrevEffect+1);
    },[optionTask])

    return <div className="carousel-item">
        <div>
            <div className="px-4 py-2">
                Puedes agregar una o varias tareas que se realizaran dentro de la sesión.
            </div>

            <div className="d-flex flex-column px-4 py-2 gap-3">

                <OptionTask key={1} numOption={1} nameOption='Agregar tareas'/>

                <OptionTask key={2} numOption={2} nameOption='Agregar un grupo de tareas' />

            </div>
        </div>
    </div>
}

