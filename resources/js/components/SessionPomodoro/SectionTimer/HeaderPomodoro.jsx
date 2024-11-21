import { useEffect } from "react"
import { BtnFinishSession } from "../shared/BtnFinishSession"

export function HeaderPomodoro(){

    useEffect(()=>{
        console.log(window.appData.nameSesion)
    },[])

    return <>
        <div className='d-flex justify-content-between justify-content-md-center '>
            <div className='text-body'>
                <h3>
                    <strong>
                        {window.appData.nameSesion}
                    </strong>
                </h3>
            </div>
            <div className='d-block d-md-none text-white'>
                <BtnFinishSession/>
            </div>
        </div>
    </>
}

