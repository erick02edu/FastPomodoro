import React, { useEffect, useState } from 'react';
import { ContextSong } from './Context/ContextSong';
import { ContextTask } from './Context/ContextTask';
import { ContextTimer } from './Context/ContextTimer';
import { createRoot } from "react-dom/client"
import { SectionTimer } from './SectionTimer/SectionTimer';
import { BarraSong } from './BarraSong/BarraSong';
import { SectionControlTimer } from './SectionTimer/SectionControlTimer';
import { HeaderPomodoro } from './SectionTimer/HeaderPomodoro';
import { MenuTask } from './MenuTask/MenuListTask';
import { ModalArranque } from './Modales/ModalArraque/ModalArranque';
import { Modal } from 'bootstrap'
import ModalSong from './Modales/ModalSong/ModalSong';
import { ModalDescanso } from './Modales/ModalDescanso/ModalDescanso';
import { ModalChangeTask } from './Modales/ModalChangeTask/ModalChangeTask';
import { ModalFinishSession } from './Modales/ModalFinishSession/ModalFinishSession';
import { BrowserRouter } from 'react-router-dom';

export default function AppSessionPomodoro() {

    const [data, setData] = useState(window.appData);

    useEffect(()=>{
        // console.log("Mis alarmas:"+window.appData.TonosPomodoro)
        // console.log("Mis alarmas:"+window.appData.TonosTask)
        //Abri modal de arranque
        let myModal = new Modal(document.getElementById('myModal'));
        myModal.show()
    },[])

    return (
        <ContextTask data={data}>
             <ContextSong data={data}>
                <ContextTimer data={data}>

                    <div className='container-fluid p-0 d-flex'>

                        <div className='w-100 bg-body-secondary' style={{minHeight:'100vh'}}>
                            <div className='container px-5 py-3 d-flex flex-column justify-content-center'>

                                <div className='mt-3 mb-2'>
                                    <HeaderPomodoro/>
                                </div>

                                <div className='w-100 d-flex justify-content-center'>
                                    <div className='d-flex flex-column'>

                                        <SectionTimer/>

                                        <div className='mt-3'>
                                            <SectionControlTimer/>
                                        </div>
                                    </div>
                                </div>

                                <ModalArranque/>
                                <ModalDescanso/>
                                <ModalChangeTask/>
                                <ModalFinishSession/>

                                <div className='mt-3'>
                                    <BarraSong/>
                                    <ModalSong/>
                                </div>

                                <div className='d-block bg-body d-md-none my-3 rounded-2 d-flex flex-column gap-2 px-3'>
                                    <MenuTask/>
                                </div>

                            </div>
                        </div>

                        <div className='w-50 d-none d-md-block'>
                            <div className='shadow position-relative w-100 d-none d-md-block px-4  d-flex flex-column  flex-nowrap overflow-y-auto' style={{minHeight:'100%'}}>
                                <MenuTask/>
                            </div>
                        </div>
                    </div>
                </ContextTimer>
            </ContextSong>
        </ContextTask>
    );
}

if(document.getElementById('appSessionPomodoro')){
    const rootElement=document.getElementById('appSessionPomodoro')
    //const data=rootElement.getAttribute('data')
    createRoot(rootElement).render(
        <AppSessionPomodoro />
    )
}


