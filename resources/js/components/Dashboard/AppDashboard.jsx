import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy,Suspense } from "react";

const HomeSection=lazy(()=>import('./Sections/home/HomeSection'));
const SesionContent=lazy(()=>import('./Sections/Sesiones/Pages/SesionContent'));
const SessionInfo=lazy(()=>import('./Sections/Sesiones/Pages/SessionInfo'));
const TaskSection=lazy(()=>import('./Sections/Tasks/TaskSection'));
const TaskDetails=lazy(()=>import('./Sections/Tasks/Pages/TaskDetails'));
const GroupTasksDetails=lazy(()=>import('./Sections/GroupTasks/Pages/GroupTaskDetails'));
const ConfigSection=lazy(()=>import('./Sections/Config/Pages/ConfigSection'));
const PerfilPage=lazy(()=>import('./Sections/Perfil/Pages/PerfilPage'));

import { ContextConfig } from "./Sections/Config/Context/ContextConfig";
import ContextMenu from "./Context/ContextMenu";
import { ContextCreateSession } from "./Context/ContextCreateSession";
import { ContextSesion } from "./Sections/Sesiones/Context/ContextSesion";
import { ContextTask } from "./Sections/Tasks/Context/ContextTask";
import { ContextGroupTask } from "./Sections/GroupTasks/Context/ContextGroupTask";
import { ContextPerfil } from "./Context/PerfilContext";
import { ContextToast } from "./Context/ContextToast";

import MenuDashboard from "./Menu/MenuDashboard";
import ModalCreateSession from "./ModalCreateSesion/Pages/ModalCreateSession";
import { ModalAddGroup } from "./Sections/GroupTasks/Components/ModalAddGroup";
import { ModalEditTask } from "./Sections/Tasks/Components/ModalEditTask";
import { MenuTooltip } from "./Menu/MenuTooltip";

import { ChargingSpinner } from "../Shared/ChargingSpinner";

export default function AppDashboard(){
    return (
        <BrowserRouter>
            <ContextConfig>
                <ContextTask>
                    <ContextGroupTask>
                        <div className="d-flex flex-nowrap">
                            <ContextPerfil>
                                <ContextToast>
                                    <ContextMenu>
                                        <MenuTooltip/>
                                        <MenuDashboard/>
                                    </ContextMenu>
                                    {/*Modal crear sesión*/}
                                    <ContextCreateSession>
                                        <ModalCreateSession/>
                                    </ContextCreateSession>

                                    <ModalAddGroup/>
                                    <ModalEditTask/>

                                    <div className="flex-grow-1 py-5 px-3 px-lg-5 bg-body-secondary">
                                        {/*Contenido de la pagina */}
                                        <Suspense fallback={<div className="d-flex w-100 justify-content-center align-items-center" style={{height:"90vh"}}>
                                            <ChargingSpinner/>
                                        </div>}>
                                            <Routes>
                                                <Route path="/home" element={
                                                    <HomeSection/>
                                                } />
                                                <Route path="/home/sesiones" element={
                                                    <ContextSesion>
                                                        <SesionContent/>
                                                    </ContextSesion>
                                                }/>
                                                <Route path="/home/sesiones/:id" element={
                                                    <ContextSesion>
                                                        <SessionInfo/>
                                                    </ContextSesion>
                                                }/>
                                                <Route path="/home/task" element={
                                                    <TaskSection/>
                                                } />
                                                <Route path="/home/task/:id" element={
                                                    <TaskDetails/>
                                                }/>
                                                <Route path="/home/task/group/:id" element={
                                                    <GroupTasksDetails/>
                                                }/>
                                                <Route path="/home/config" element={
                                                    <ConfigSection/>
                                                } />
                                                <Route path="/home/perfil" element={
                                                    <PerfilPage/>
                                                } />
                                            </Routes>
                                        </Suspense>
                                    </div>
                                </ContextToast>
                            </ContextPerfil>
                        </div>
                    </ContextGroupTask>
                </ContextTask>
            </ContextConfig>
        </BrowserRouter>
    )
}

if(document.getElementById('appDashboard')){
    createRoot(document.getElementById('appDashboard')).render(<AppDashboard/>)
}



