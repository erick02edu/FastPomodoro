import { createContext, useEffect, useState, useRef, useContext} from "react";
import { TaskContext } from "./ContextTask";
export const TimerContext=createContext()
import { Modal } from "bootstrap";
import { SongContext } from "./ContextSong";

export function ContextTimer(props){

    const {ListTaskPending,OpenChangeTask, MarkTaskComplet,TareaActual,setNextTask}=useContext(TaskContext);
    const {alarmPomoPlay,alarmPomoStop,alarmTaskPlay,alarmTaskStop,alarmFinishSesion}=useContext(SongContext);
    const [activeBtnPause,setActiveBtnPause]=useState(true);

    let [min,setMin]=useState(TareaActual.TimeInterval) //Minutos del temporizador
    let [seg,setSeg]=useState(0); //Segundos del temporizador
    const intervalRef=useRef(null); /*Variable que controla el temporizador*/
    let [pauseState,setPauseState]=useState(false);//Estado del pausa del temporizador
    let duracion=(min*60)+seg; //Calculo de la duracion en seg del temporizador
    let [duracionSeg,setDuracionSeg]=useState(duracion)
    let [typeTimer,setTypeTimer]=useState('pomodoro')
    let [pomoComplet,setPomoComplet]=useState(0) //Numero de pomodoros completados

    //Elementos
    let modalDescansoRef=useRef(); //Modal de descanso
    const BarProgress=useRef();  //Barra del temporizador
    const barBreakTime=useRef(); //barra de descanso
    const ModalFinishSession=useRef()

    let [count,setCount]=useState(0);

    let [finishSesion,setFinishSesion]=useState(false)
    //Acción cada que cambia la tarea actual
    useEffect(()=>{
        //Evitar la primera ejecución
        if(count>0){
            setPomoComplet(0)
            reanudarPomodoro();
        }
        setCount(prevCount=>prevCount+1);
    },[TareaActual])



    const [prueba,setPrueba]=useState(0);

    const reanudarPomodoro=()=>{
        //Cancelar animación de descanso
        barBreakTime.current.style.animation="";
        //Actualizar el tipo de temporizador
        setActiveBtnPause(true);
        setTypeTimer('pomodoro')

        //Definir el tiempo del pomodoro
        let timePomo=TareaActual.TimeInterval


        //----------------------------------------------------------------
        if(prueba>=0){
            setMin(timePomo);
            setSeg(0);

            //Definir el tiempo para la duracion de la animacion del cronometro
            let newDuration=timePomo*60
            setDuracionSeg(newDuration)
        }
        else{
        //----------------------------------------------------------------

        //ACTIVAR PARA SESIÓN CORTA DE PRUEBA


        // setMin(0);
        // setSeg(6);
        // let newDuration=3;
        // setPrueba(prevPrueba=>prevPrueba+1);
        }

        //alert(newDuration)
        //Reactivar animación
        //BarProgress.current.style.animation=`bar-fill ${newDuration}s linear forwards`
        //Cerrar modal de descanso
        document.getElementById('btnBreakTime').click();
        //Iniciar temporizador
        IniciarContador()
    }

    const IniciarDescanso=(tipoDescanso)=>{
        //Esperar a que termine de sonar alarma
        alarmPomoPlay().then(() => {

            //Cancelar animación del temporizador]
            //BarProgress.current.style.animation="";
            //Cambiar el tipo de temporizador al del descanso
            setTypeTimer('breakTime');
            var newMin;

            //Determinar si es un descanso corto o largo y asignar el tiempo de descanso
            tipoDescanso=='short' ? newMin= TareaActual.breakTime : newMin=TareaActual.breakTimeLong

            setMin(newMin);
            setSeg(0)
            //Definir la duración para la animación del cronometro
            let newDuration=(newMin*60)+seg
            setDuracionSeg( newDuration)

            //Abrir modal de descanso
            var modalDescanso = new Modal(modalDescansoRef.current);
            modalDescanso.show()

            //Iniciar contador de descanso
            IniciarContador()
            barBreakTime.current.style.animation= `barBreakTime ${newDuration}s linear forwards`;

        }).catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    }

    const IniciarContador=()=>{
        if(!intervalRef.current){
            intervalRef.current=setInterval(()=>{
                setSeg((prevSeg)=>prevSeg-1)
            },1000)
        }
    }

    const terminarPomodoro=()=>{

        if(pauseState==true){
            Pause();
        }

        clearInterval(intervalRef.current)
        intervalRef.current=null;

        setPomoComplet(0);
        //Marcar la tareaActual como completa
        MarkTaskComplet(TareaActual.id);

        alarmTaskPlay();

        //BarProgress.current.style.animation='';
        //Abri modal para cambio de tarea
        OpenChangeTask()

    }


    const endSesion=()=>{

        setFinishSesion(true);
        MarkTaskComplet(TareaActual.id);
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setPomoComplet(0);
        setMin(0);
        setSeg(0);
        //BarProgress.current.style.animation='';
        //Abrir modal de finalizar sesión
        var ModalFinish = new Modal(ModalFinishSession.current);
        ModalFinish.show();
        alarmFinishSesion();
    }


    const verifyHasMoreTasks=()=>{
        //Verificar si hay una siguiente tarea por realizar
        if(ListTaskPending[1]==undefined){
            endSesion();
        }
        else{
            terminarPomodoro();
        }
    }

    let numDescansoShort=useRef(0);

    useEffect(() => {
        document.title=`${window.appData.nameSesion} ${min}:${seg}`
        //BarProgress.current.style.animationPlayState = 'running';
        if(seg==0 && min==0 && !finishSesion){
            //Temporizador terminado

            //Pausar temporizador
            clearInterval(intervalRef.current)
            intervalRef.current=null;

            if(typeTimer=="pomodoro"){

                let newNumPomo=pomoComplet+1;


                //Verificar si ya se cumplieron los pomodoros de la tarea actual para pasar a la siguiente tarea
                if(newNumPomo==TareaActual.numPomodoros){
                    //Volver a inicializar los pomodoros completos a 0
                    setPomoComplet(0)
                    verifyHasMoreTasks();
                }
                else{
                    setActiveBtnPause(false);
                    alarmPomoPlay();
                    //  Determinar si el descanso es uno corto o largo
                    newNumPomo % (TareaActual.numPomoBreakTime+1)==0 ? IniciarDescanso('Long') : IniciarDescanso('short');
                    // console.log(numDescansoShort);
                    // if(TareaActual.numPomoBreakTime!=0 && numDescansoShort.current==TareaActual.numPomoBreakTime){
                    //     numDescansoShort.current=0
                    //     IniciarDescanso('Long')

                    // }else{
                    //     numDescansoShort.current++;
                    //     IniciarDescanso('short');
                    // }


                    //Actualizar lo pomodoros completados
                    setPomoComplet(prevPomoComplet=>prevPomoComplet+1)
                }
            }
            else{
                reanudarPomodoro();
            }
        }
        else if(seg<0){
            setSeg(59)
            setMin((minActual)=>minActual-1)
        }

    },[seg]);



    let Pause=()=>{
        if(pauseState==true){
            intervalRef.current=null;
            IniciarContador()
        }else{
            //BarProgress.current.style.animationPlayState = 'paused';
            clearInterval(intervalRef.current);
        }
        setPauseState(!pauseState);
    }

    return <TimerContext.Provider value={{
            Pause,
            pauseState,
            min:min,
            seg:seg,
            duracionSeg,
            BarProgress,
            barBreakTime,
            reanudarPomodoro,
            modalDescansoRef,
            pomoComplet,
            reanudarPomodoro,
            terminarPomodoro,
            ModalFinishSession,
            verifyHasMoreTasks,
            endSesion,
            activeBtnPause
        }}>
        {props.children}
    </TimerContext.Provider>

}
