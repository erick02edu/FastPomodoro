export function DescriptionPlataform(){
    return <div id="presentacion">
        <div className="d-flex flex-column flex-lg-row align-items-center mt-2 W-100">
            <div className="pe-4 d-flex flex-column justify-content-evenly gap-0 gap-lg-4">

                <h2><strong>¿Que es FastPomodoro?</strong></h2>
                <div>
                    <p className="">
                        Fast Pomodoro es una plataforma orientada a gestionar tu tiempo de manera eficiente utilizando la técnica Pomodoro
                        dividiendo tareas en intervalos de tiempo de trabajo y alternando con tiempos de descanso para mantenerte enfocado.
                    </p>
                </div>

            </div>
            <div className="w-100 mx-3 px-0 ps-lg-4 ">
                <img src={`${import.meta.env.VITE_API_URL}/img/PanelEstudio2.JPG`} className="rounded-2 w-100 img-fluid border" style={{ height:"200px"}}></img>
            </div>
        </div>

    </div>
}













