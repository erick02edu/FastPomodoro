


export function SectionWelcome(){
    return  <section className="d-flex flex-column flex-lg-row justify-content-center align-items-center  position-relative overflow-hidden w-100 sectionFazt" style={{
        height:"450px",
        }} id="Home">
        <div className="text-white gap-5 align-items-center content position-relative d-flex justify-content-center overflow-hidden">
            <div className="w-50">
                <h2> <strong> Bienvenido a FastPomodoro</strong>  </h2>
                <small>Organiza tus tareas por medio de intervalos de enfoque y descanso con el fin de mejorar tu productividad</small>
            </div>

            <div className="d-none d-lg-flex justify-content-center align-items-center">
                <img loading="lazy" src={`${import.meta.env.VITE_API_URL}/img/ImgWelcome.webp`} className="rounded-circle shadow" style={{height:"280px"}} alt="error"></img>
            </div>

        </div>

        <div className="d-flex justify-content-center z-2 mt-3 d-block d-lg-none">
            <a type="button" href="/register" className="btn btn-primary text-white shadow-lg"> Comienza ahora</a>
        </div>

    </section>
}


