import { LogoFastPomodoro } from "../../Shared/LogoFastPomodoro";
import { Link } from "react-router-dom";


export function FooterIndex(){
    return <div className="mt-5 bg-black text-white py-5" >

            <div className="container py-5">
                <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between">

                    <div className="d-flex flex-column w-100 gap-2 justify-content-center align-items-center align-items-lg-end pe-lg-1 order-lg-1">
                        <LogoFastPomodoro color="text-white"/>
                        <small className="d-flex justify-content-center align-items-center text-center">
                            <i> Diseñado para mejorar tu rendimiento, productividad y eficiencia</i>

                        </small>
                    </div>

                    <div className="order-lg-0 d-flex flex-column gap-1 w-100 align-items-center align-items-lg-start">
                        <div className="d-flex w-100 flex-wrap justify-content-center flex-lg-nowrap justify-content-lg-start gap-4 ">
                            <Link className="text-uppercase nav-link" to="/#Home"><strong>Home</strong></Link>

                            <Link className="text-uppercase nav-link" to="/#presentacion"><strong>Nosotros</strong></Link>

                            <Link className="text-uppercase nav-link"  to="/#beneficios"><strong>Beneficios</strong></Link>
                        </div>

                        <small>Contacto: FastPomodoro@gmail.com</small>


                        <small>Copyright @2024 FastPomodoro</small>

                    </div>

                </div>
            </div>
    </div>
}
