import {useState,useEffect} from 'react';
import axios from 'axios';
import { ChargingSpinner } from '../../../../Shared/ChargingSpinner';
import { BtnViewSesion } from '../../Sesiones/Components/BtnViewSesion';


export function SesionRecents(){

    const [sesiones,setSesiones]=useState([]);
    const [isLoad,setIsLoad]=useState(true);

    const getDate=(fecha)=>{
        let dateTime = fecha;
        let [date, time] = dateTime.split(' ');
        return date;
    }

    const getHora=(fecha)=>{
        //Fecha en formato ("2024-11-02T20:43:43.000000Z")
        let dateTime =fecha;
        let [date, time] = dateTime.split(' ');

        time=`${time.slice(0, 5)}`

        return time;
    }

    const dateEqual=(date1,date2)=>{
        return date1.getTime() === date2.getTime()
    }

    function formatearFecha(fechaISO) {

        const fecha = new Date(fechaISO);
        return new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(fecha);
    }

    const getRecentSesions=async()=>{
        try {
            const response=await axios.get("/getRecentSesions");
            setSesiones(response.data);
        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoad(false)
        }
    }
    useEffect(()=>{
        getRecentSesions()
    },[])

    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Se suma 1 ya que getMonth() devuelve el mes en base 0
    const dia = String(fecha.getDate()).padStart(2, '0');
    const fechaFormateada= `${anio}-${mes}-${dia}`

    return <>
        {
            isLoad ?
            <div className="d-flex justify-content-center align-items-center" style={{height:"45vh"}}>
                <ChargingSpinner/>
            </div>

            :sesiones.length>0 && !isLoad ?
                <table className="table rounded-2 shadow-sm border">
                    <thead>
                        <tr>
                            <th scope="col">
                                <small>Sesión</small>
                            </th>
                            <th scope="col" className='d-none d-lg-table-cell'>
                                <small className='d-none d-lg-table-cell'>Abierto por ultima vez</small>
                            </th>
                            <th scope="col">
                                <small>Opciones</small>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        sesiones.map(sesion=>(
                            <tr key={sesion.id}>
                                <td className=""><small>{sesion.name}</small></td>
                                <td className='d-none d-lg-table-cell'>
                                    <small className='d-none d-lg-table-cell'>
                                        {
                                            fechaFormateada==getDate(sesion.lastOpening) ? <>
                                                Hoy a las {getHora(sesion.lastOpening)}
                                            </>
                                            :<>
                                            { formatearFecha(sesion.lastOpening) }
                                            </>
                                        }
                                    </small>
                                </td>
                                <td>
                                    <BtnViewSesion idSesion={sesion.id}/>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            : !isLoad &&
            <div className="d-flex bg-body-tertiary justify-content-center align-items-center border rounded-2" style={{height:"40vh"}} >
                <div className="text-center">
                    <p>Aun no has creado ninguna sesión</p>

                    <button className="btn btn-primary text-white my-anchor-element" data-bs-toggle="modal" data-bs-target="#ModalCreateSession" >
                        Crear mi primer sesión
                    </button>

                </div>
            </div>
        }

    </>



}
