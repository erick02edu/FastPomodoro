import { Link } from "react-router-dom"
import { LogoFastPomodoro } from "../../Shared/LogoFastPomodoro"

export function MenuFunciones(){
    return  <nav className='menuFunciones px-4 px-lg-0 py-lg-4 border border-left shadow overflow-y-auto '>
    <div className="collapse navbar-collapse m-0 p-0 justify-content-start" id="navbarScroll2">

        <div className='d-flex flex-column gap-0 w-100 px-4 mt-3 mt-lg-0 pb-3 pb-lg-0'>

            <div className='d-flex justify-content-between mb-1'>
                <LogoFastPomodoro link={true}/>
                <div>
                    <a className='' href='/'>Regresar</a>
                </div>
            </div>

            <hr/>

            <h6 className=''><strong>Funcionalidades</strong></h6>

            <div className="accordion-item w-100">
                <h2 className="accordion-header">
                <button className="accordion-button border-0 d-flex p-0 py-lg-3 w-100 rounded-2 border btn py-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelSesiones" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div className='d-flex justify-content-between w-100'>
                        <div>
                            Crear sesiones de estudio
                        </div>
                        <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>

                </button>
                </h2>
                <div id="panelSesiones" className="accordion-collapse collapse show px-lg-4 mt-2 mt-lg-0">
                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/crearSesion/#Inicio">¿Como crear una sesión?</Link>
                    </ul>
                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/crearSesion#TaskSesion">¿Como agregar tareas a una sesión?</Link>
                    </ul>
                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/crearSesion#TaskGroup">¿Como agregar un grupo de tareas a una sesión?</Link>
                    </ul>
                </div>
            </div>



            <div className="accordion-item w-100">
                <h2 className="accordion-header">
                <button className="accordion-button border-0 d-flex p-0 py-lg-3 w-100 rounded-2 border btn py-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div className='d-flex justify-content-between w-100'>
                        <div>
                           Configuración de sesiones de estudio
                        </div>
                        <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>
                </button>
                </h2>

                <div id="panelsStayOpen-collapseOne2" className="accordion-collapse collapse show px-lg-4 mt-2 mt-lg-0">
                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/sesionesEstudio/#Inicio">Comenzar sesión de estudio</Link>
                    </ul>
                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/sesionesEstudio/#OrderTasks">Orden de ejecución de tareas</Link>
                    </ul>

                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/sesionesEstudio/#Desglose">Desglose de un sesión de estudio</Link>
                    </ul>
                </div>
            </div>


            <div className="accordion-item w-100">
                <h2 className="accordion-header">
                <button className="accordion-button border-0 d-flex p-0 py-lg-3 w-100 rounded-2 border btn py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-panel-estudio" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div className='d-flex justify-content-between w-100'>
                        <div>
                           Panel para sesión estudio pomodoro
                        </div>
                        <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>
                </button>
                </h2>

                <div id="collapse-panel-estudio" className="accordion-collapse collapse show px-lg-4 mt-2 mt-lg-0">
                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/PanelEstudio/#Inicio">Flujo de sesión de estudio</Link>
                    </ul>

                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/PanelEstudio/#Music">Música durante una sesión</Link>
                    </ul>
                </div>
            </div>

            <div className="accordion-item w-100">
                <h2 className="accordion-header">
                <button className="accordion-button border-0 d-flex p-0 py-lg-3 w-100 rounded-2 border btn py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-configuraciones" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <div className='d-flex justify-content-between w-100'>
                        <div>
                           Configuraciones
                        </div>
                        <i className="fa-solid fa-chevron-down ms-1"></i>
                    </div>
                </button>
                </h2>

                <div id="collapse-configuraciones" className="accordion-collapse collapse show px-lg-4 mt-2 mt-lg-0">
                    <ul className="accordion-body">
                    <Link className='text-decoration-none list-unstyled' to="/funciones/Configuraciones/#Inicio">Configuración para tareas rápidas</Link>
                    </ul>
                </div>
            </div>


        </div>
    </div>

</nav>

}
