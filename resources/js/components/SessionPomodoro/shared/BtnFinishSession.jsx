

export function BtnFinishSession({responsive=true}){

    const idSesion=window.appData.idSesion;

    return <>
    {
        responsive ?  <a  type="button" className="w-100 text-white d-flex justify-content-center py-2 rounded-2 border-0 bg-primary text-white text-decoration-none"  href={`/home/sesiones/${idSesion}`}>
                <i className="fa-solid fa-arrow-right-from-bracket d-block d-md-none px-2"></i>
                <div className="d-none d-md-block">Terminar sesión</div>
        </a>
        : <a  type="button" className="w-100 text-white d-flex justify-content-center py-2 rounded-2 border-0 bg-primary text-white text-decoration-none"  href={`/home/sesiones/${idSesion}`}>
            <div>Terminar sesión</div>
        </a>
    }
    </>


}

