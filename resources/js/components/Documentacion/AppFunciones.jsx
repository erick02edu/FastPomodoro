import {createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { MenuFunciones } from './Components/MenuFunciones'
import { lazy, Suspense, useEffect } from 'react'
import { ChargingSpinner } from '../Shared/ChargingSpinner'
const CrearSesiones=lazy(()=>import('./Pages/CrearSesiones'))
const SesionesEstudio=lazy(()=>import('./Pages/SesionesEstudio'));
const PanelEstudio=lazy(()=>import('./Pages/PanelEstudio'));
const Configuraciones=lazy(()=>import('./Pages/Configuraciones'))

export function AppFunciones(){

    const toggleMode=()=>{
        const body = document.body;
        const currentTheme = body.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-bs-theme', newTheme);
    }

    return <BrowserRouter>
    <div className='position-relative' style={{minHeight:"100vh"}}>

        <div className="layoutFunciones my-0 p-0 w-100 d-flex flew-nowrap navbar navbar-expand-lg justify-content-start align-items-start" >

            <MenuFunciones/>

            <div className=' flex-grow-1 justify-content-start'>
                <Suspense fallback={
                    <div className='flex-grow-1 d-flex justify-content-center align-items-center' style={{minHeight:"100vh"}}>
                        <ChargingSpinner/>
                    </div>}>

                    <div className='position-relative z-0' style={{height:"auto"}}>
                        <div className='d-flex py-3 justify-content-end border border-bottom w-100 bg-body menu-secondary' style={{zIndex:"1000"}} >
                            <div className='container d-flex px-lg-5 justify-content-between align-items-center'>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll2" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className='d-flex gap-2'>

                                    <span>Modo oscuro</span>

                                    <input
                                        type="checkbox"
                                        id="btnToggleDarkMode"
                                        onChange={toggleMode}
                                        className="d-none"
                                    />
                                    <label htmlFor="btnToggleDarkMode" className="toggleDark border border-body-secondary border-3"
                                    style={{
                                        width:"40px",
                                        height:"25px",
                                        borderRadius:"200px",
                                        cursor:'pointer',
                                        position:'relative'
                                    }}></label>
                                </div>

                            </div>

                        </div>

                        <div className='px-5 container-fluid py-3 bg-body-secondary w-100' style={{minHeight:"100vh"}}>
                            <Routes>
                                    <Route path='/funciones' element={<>Funciones de FastPomodoro</>}/>
                                    <Route path='/funciones/crearSesion' element={
                                        <CrearSesiones/>
                                    }/>

                                    <Route path='/funciones/sesionesEstudio' element={
                                        <SesionesEstudio/>
                                    }/>

                                    <Route path='/funciones/PanelEstudio' element={
                                        <PanelEstudio/>
                                    }/>

                                    <Route path='/funciones/Configuraciones' element={
                                        <Configuraciones/>
                                    }/>

                            </Routes>
                        </div>
                    </div>

                 </Suspense>
            </div>


        </div>
    </div>

    </BrowserRouter>

}


if(document.getElementById('appFunciones')){
    createRoot(document.getElementById("appFunciones")).render(<AppFunciones/>)
}




