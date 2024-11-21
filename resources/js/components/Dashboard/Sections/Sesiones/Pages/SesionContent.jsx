import { useContext, useEffect, useState } from "react"
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner"
import { Sesión } from "../Components/Sesion";
import { GrowingSpinner } from "../../../../Shared/GrowingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { SesionContext } from "../Context/ContextSesion";
import { ConfirmDeleteSesion } from "../Components/ConfirmDeleteSesion";
import { ToastRenameSession } from "../Components/ToastRenameSession";
import { ToastDeleteSession } from "../Components/ToastDeleteSession";

export default function SesionContent(){

    const {ObtenerSesiones,ListSesion,load,hasMore,sesionSelect,toastRename,toastDelete,searchSesion,
        textSearch,setTextSearch,getMoreSessionSearch}=useContext(SesionContext);
    const [timeOutId,setTimeoutId]=useState(null);
    const src=`${import.meta.env.VITE_API_URL}/img/CerebroTriste.png`

    useEffect(()=>{
        ObtenerSesiones();
    },[])

    const handleKeyUp=(e)=>{
        if(setTimeoutId){
            clearTimeout(timeOutId)
        }
        const id=setTimeout(()=>{
            searchSesion(e.target.value)
        },500)
        setTimeoutId(id);
    }

    const handleInput=(e)=>{
        setTextSearch(e.target.value);
    }

    const nextSession=()=>{
        if(textSearch==""){
            ObtenerSesiones();
        }
        else{
            getMoreSessionSearch(textSearch);
        }
    }

    return <div className="container p-0">
            <h3>Lista de mis sesiones</h3>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <input type="text" className="form-control shadow w-100 bg-body-tertiary" value={textSearch} onChange={handleInput} onKeyUp={handleKeyUp} placeholder="Buscar sesión ..."/>
                </div>
            </div>

            <ConfirmDeleteSesion/>

            <ToastRenameSession nameRef={toastRename}/>
            <ToastDeleteSession nameRef={toastDelete}/>

            <div>
                {
                    load==true ?
                        <div className="w-100 d-flex justify-content-center align-items-center"
                        style={{height:'60vh'}}>
                            <ChargingSpinner/>
                        </div>
                    :  ListSesion.length==0 ?
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 p-0 ">
                                    <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{height:'60vh'}}>

                                        <div className="row d-flex justify-content-center">
                                            <div className="col col-6 col-md-7 col-lg-8">
                                                <div className="d-flex justify-content-center w-100">
                                                    <img src={src} alt="error" className="w-100"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                           <strong>No se encontró ninguna sesión</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                    <div className="w-100 d-flex flex-column gap-2 ">
                        <InfiniteScroll
                            dataLength={ListSesion.length}
                            next={nextSession }
                            hasMore={hasMore}
                            loader={ <GrowingSpinner/> }
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                <b>No hay mas datos</b>
                                </p>
                            }
                        >
                        {
                            ListSesion.map((sesion)=>(
                                <Sesión key={sesion.id} sesion={sesion}/>
                            ))
                        }
                        </InfiniteScroll>
                    </div>
                }
            </div>

    </div>
}
