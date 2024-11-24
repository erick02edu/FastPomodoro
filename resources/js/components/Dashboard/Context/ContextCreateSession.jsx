
import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export const createSessionContext=createContext()

export function ContextCreateSession(props){

    const [numItemsCarousel,setNumItemsCarousel]=useState(3)
    const [itemCarouselCurrent,setItemCarouselCurrent]=useState(1);
    const [optionTask,setOptionTask]=useState(null);
    const [activeBtnNext,setActiveBtnNext]=useState(false);
    const [spinnerActive,setSpinnerActive]=useState(true);
    const [ListTaskComplet,setListTaskComplet]=useState([]);
    const btnBackCarousel=useRef();
    const modalCreateSesion=useRef();
    let navigate=useNavigate();

    const [formSesion,setFormSesion]=useState({
        name:'',
        ListTask:[],
        GroupTask:[],
    })

    const crearNewSession=async()=>{

        for (let index = 0; index < numItemsCarousel-1 ; index++) {
            btnBackCarousel.current.click();
        }

        await axios.post('/sesion',formSesion)
        .then(async (response)=>{
            let newId=response.data
            setFormSesion({
                name:'',
                ListTask:[],
                GroupTask:[],
            })
            setOptionTask(null);
            navigate(`/home/sesiones/${newId}`,{replace:true})
        })
        .catch(error=>console.log(error))
    }

    const getTask=async()=>{
        setSpinnerActive(true);
        await axios.get('/taskUser')
        .then(response=>{
            setListTaskComplet(response.data)
        })
        .catch(error=>console.log(error))
        .finally( setSpinnerActive(false) )
    }

    const inputChange=(e)=>{
        setFormSesion({
            ...formSesion,
            [e.target.name]:e.target.value
        })
    }

    const validationInput=()=>{
        setActiveBtnNext(formSesion.name!="");
    }

    const validationOption=()=>{
        setActiveBtnNext(optionTask!=null)
    }

    const ValidationCarrouselItem=(itemCurrent)=>{
        switch(itemCurrent){
            case 1:{
                validationInput();
                break;
            }
            case 2:{
                validationOption();
                break;
            }
            case 3:{
                break;
            }
        }
    }

    const backItemCarousel=()=>{
        let item=itemCarouselCurrent-1;
        setItemCarouselCurrent((prevItem)=>prevItem-1)
        ValidationCarrouselItem(item);
    }

    const nextItemCarrousel=()=>{
        const nextItemCarousel=itemCarouselCurrent+1;
        setItemCarouselCurrent((prevItem)=>prevItem+1);
        ValidationCarrouselItem(nextItemCarousel);
    }

    return <createSessionContext.Provider value={{
        numItemsCarousel,
        setNumItemsCarousel,
        itemCarouselCurrent,
        optionTask,
        setOptionTask,
        activeBtnNext,
        setActiveBtnNext,
        spinnerActive,
        ListTaskComplet,
        formSesion,
        setFormSesion,
        validationInput,
        validationOption,
        getTask,
        inputChange,
        nextItemCarrousel,
        backItemCarousel,
        crearNewSession,
        btnBackCarousel,
        modalCreateSesion,
    }}>
        {props.children}
    </createSessionContext.Provider>
}
