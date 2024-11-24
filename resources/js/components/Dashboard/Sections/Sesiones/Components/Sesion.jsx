import { Link } from "react-router-dom";
import { EllipsisMenu } from "./EllipsisMenu";
import { useContext, useEffect, useRef, useState } from "react";
import { SesionContext } from "../Context/ContextSesion";
import axios from "axios";
import { BtnViewSesion } from "./BtnViewSesion";

export function Sesión({sesion}){

    const [nameSesion,setNameSesion]=useState(sesion.name)

    const {sesionSelect,setSesionSelect,renameSesion,editName,setEditName}=useContext(SesionContext)
    const inputName=useRef()

    const [nameAnt,setNameAnt]=useState('');

    useEffect(()=>{
        if(sesionSelect?.id==sesion.id  && editName ){
            //Guardar el valor de name antes de editar
            setNameAnt(nameSesion.trim())
            //Hacer focus
            inputName.current.focus();
        }
    },[sesionSelect])

    const changeName=(e)=>{
        setNameSesion(e.target.value)
    }

    const actualizarName=async ()=>{
        setEditName(false)
        setSesionSelect();
        //Verificar que el nombre no este vacio
        if(nameSesion==""){
            setNameSesion(nameAnt);
        }
        else{
            //Verificar que el usuario cambio el nombre
            if(nameSesion.trim()!=nameAnt){
                renameSesion(sesion.id,nameSesion)
            }
        }
    }

    const formatearMinutos=(minutos)=>{
        let min=minutos;
        if(min>=1440){
            var dias=Math.floor(min/1440);
            min=min-(dias*1440);
        }

        if(min>=60){
            var horas= Math.floor(min/60);
            min=min-(horas*60);
        }
        return ` ${ dias>0 ? `${dias} dia ` : "" } ${ horas>0 ? `${horas} hora(s) ` : "" } ${ min>=0 ? `${min} minutos` : ""} `
    }

    return  <div className="card text-left my-2" key={sesion.id}>
        <div className="card-body">

            <div className="d-flex justify-content-between">
                <div>
                    <input ref={inputName} type="text" className="border-0 fs-4 form-control bg-body ps-0 w-100"
                    value={nameSesion} readOnly={!editName} disabled={!editName}
                    onChange={changeName} onBlur={actualizarName}/>
                </div>

                <EllipsisMenu sesion={sesion} />
            </div>

            <p className="card-text">Duración: {formatearMinutos(sesion.totalTimeSeg)}</p>

            <BtnViewSesion idSesion={sesion.id}/>

        </div>
    </div>
}


