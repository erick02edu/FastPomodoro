import {useState,useEffect, useContext} from 'react'
import axios from 'axios';
import { ImgPerfil } from '../../../../Shared/ImgPerfil';
import { PerfilContext } from '../../../Context/PerfilContext';
import { ListAvatares } from '../Components/ListAvatares';
import { ToastChangeImgPerfil } from '../Components/ToastChangeImgPerfil';
import { AlertDeleteAccount } from '../Components/AlertDeleteAccount';

export default function PerfilPage(){

    const [userInfo,setUserInfo]=useState(window.user);

    function formatearFecha(fechaISO) {

        const fecha = new Date(fechaISO);
        return new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(fecha);
    }

    return <div>
        <div className="d-flex flex-column flex-md-row gap-3 ">

            <div  style={{height:"100px"}} className="mb-3 mb-lg-0 d-flex justify-content-center">
                <ImgPerfil />
            </div>

            <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                <div>
                     <h3>{userInfo.name}</h3>
                </div>
                <div>
                    <div className="dropdown">
                        <button className="btn btn-primary text-white" data-bs-toggle="dropdown" aria-expanded="false">
                            Cambiar foto de perfil
                        </button>
                        <ul className="dropdown-menu border h-auto shadow p-3" style={{width:'45vh'}} >

                            <div className="row row-cols-3">
                                <ListAvatares/>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className="mt-2">
            <h5><strong>Correo</strong></h5>
            <div className="d-flex flex-nowrap w-100">
                <span>{userInfo.email}</span>
            </div>
        </div>

        <hr></hr>

        <strong>
            <small>Fecha de union a Fast pomodoro: {formatearFecha(userInfo.created_at) }</small>
        </strong>

        <hr></hr>

        <AlertDeleteAccount/>

        <div className="mt-3" >
            <button className="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#alertDeleteAccount">Eliminar cuenta</button>
        </div>

        <ToastChangeImgPerfil/>

    </div>
}
