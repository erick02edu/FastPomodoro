


export function SectionIntegrations(){

    return <div className="mt-5">
        <div className="d-flex flex-nowrap flex-column  flex-lg-row  align-items-center ">
            <div className="d-flex flex-column gap-2 w-100 order-lg-1 ps-lg-5">
                <h3>
                    <strong>Integración con otras plataformas</strong>
                </h3>
                FastPomodoro ofrece la posibilidad de integración con plataformas como Spotify para tener listas de reproducción que ayuden a nuestros usuarios a establecer un ambiente de concentración

                <div className="d-flex mb-4 mb-lg-0 gap-2 mx-1 mt-2" style={{color:"#1DB954"}}>
                    <i className="fa-brands fa-spotify" style={{scale:"1.5"}}></i>
                </div>
            </div>

            <div className="px-0 flex-grow-1 w-100 order-lg-0">
                <img loading="lazy" src={`${import.meta.env.VITE_API_URL}/img/IntegrationSpotify.webp`} className="w-100 rounded-2" style={{height:"235px"}}></img>
            </div>
        </div>
    </div>

}


