


export function HowAddGroupSesion(){
    return <>
        <h3 className="" id="TaskGroup">
            <strong>2. Agregar un grupo de tareas a una sesión</strong>
        </h3>


        <p className="mt-3">FastPomodoro también permite crear sesiones por medio de uno o varios grupos de tareas para ello selecciona la opción <i>"Agregar un grupo de tareas" </i> </p>

        <div className="py-3 border rounded-2 shadow d-flex justify-content-center">
            <img src={`${import.meta.env.VITE_API_URL}/img/ImgFuncionalidades/AddGroupToSesion/AddGroupToSesion1.jpg`} className=" shadow-lg rounded-1 img-fluid"  style={{height:"250px"}}></img>
        </div>

        <p className="mt-3">En el siguiente apartado se mostrara una lista con sus grupos de tareas, si aun no ha creado ningún grupo puede crear uno dando clic en el botón de (+).</p>

        <div className="py-3 border rounded-2 shadow d-flex justify-content-center">
            <img src={`${import.meta.env.VITE_API_URL}/img/ImgFuncionalidades/AddGroupToSesion/AddGroupToSesion2.jpg`} className=" shadow-lg rounded-1 img-fluid"  style={{height:"250px"}}></img>
        </div>

        <p className="mt-3">Denle un nombre a su grupo y seleccione las tareas que este para este ejemplo creamos un grupo llamado <strong>"Actividades para mi examen de ingles"</strong>
            y seleccionamos las tareas <i>"Repaso de verbos" </i> y <i>"Estudiar vocabulario de lectura"</i> una vez creado de clic en agregar.
        </p>

        <div className="py-3 border rounded-2 shadow d-flex justify-content-center">
            <img src={`${import.meta.env.VITE_API_URL}/img/ImgFuncionalidades/AddGroupToSesion/AddGroupToSesion3.jpg`} className=" shadow-lg rounded-1 img-fluid"  style={{height:"250px"}}></img>
        </div>

        <p className="mt-3">
            Seleccione el grupo que ha creado y de clic en el botón "Crear sesión".
        </p>

        <div className="py-3 border rounded-2 shadow d-flex justify-content-center">
            <img src={`${import.meta.env.VITE_API_URL}/img/ImgFuncionalidades/AddGroupToSesion/AddGroupToSesion4.jpg`} className=" shadow-lg rounded-1 img-fluid"  style={{height:"250px"}}></img>
        </div>

        <p className="mt-3">
            Listo ambas tareas que agrego a su grupo han sido añadidas a su sesión.
        </p>

        <div className="py-3 border rounded-2 shadow d-flex justify-content-center">
            <img src={`${import.meta.env.VITE_API_URL}/img/ImgFuncionalidades/AddGroupToSesion/AddGroupToSesion5.jpg`} className=" shadow-lg rounded-1 img-fluid"  style={{height:"250px"}}></img>
        </div>

    </>
}






