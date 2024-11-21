import { createContext } from "react";
import { useState,useRef } from "react";
export const SongContext=createContext()

export function ContextSong(props){

    const [audioPomo,setAudioPomo]=useState(`${import.meta.env.VITE_API_URL}/TonoFinishPomo/${props.data.TonosPomodoro[0]}`)
    let alarmPomodoro=new Audio(audioPomo)

    const [audioTask,setAudioTask]=useState(`${import.meta.env.VITE_API_URL}/TonoFinishTask/${props.data.TonosTask[0]}`)
    let alarmTask=new Audio(audioTask)

    const [audioEndSesion,setAudioEndSesion]=useState(`${import.meta.env.VITE_API_URL}/TonoFinishSesion/${props.data.TonoFinishSesion[0]}`);
    let alarmEndSesion=new Audio(audioEndSesion);

    const [activeTab, setActiveTab] = useState("Song");
    //Lista de playlist
    let [playlists,setPlaylist]=useState([])
    //Playlist actual en reproducción
    let [reproduceId,setReproduceId]=useState('')
    //37i9dQZF1EVJHK7Q1TBABQ
    //Controlador de la playlist
    const controlPlaylist = useRef(null);
    //Lista de songs
    let [Songs,setSongs]=useState(props.data.Songs)
    //Song actual en reproducción
    let [reproduceSong,setReproduceSong]=useState('Aylex')
    //Indica la posicion del song en reproduccion
    let [indexSong,setIndexSong]=useState(0)
    //Controlador del song
    let controlSong=useRef(null)
    //Controlador para ver estado del song
    let [pauseSong,setPauseSong]=useState(true)
    //Ver que tipo de sonido esta activo
    let [typeSong,setTypeSong]=useState('Song')



    const alarmPomoPlay=()=>{
        //Activar alarma cada que termina un pomodoro
        return new Promise((resolve, reject) => {
            // Reproduce el sonido
            alarmPomodoro.play().then(() => {
                // Escucha cuando el sonido termine
                alarmPomodoro.addEventListener('ended', resolve);
            }).catch(reject);
        });
    }

    const alarmPomoStop=()=>{
        alarmPomodoro.pause()
        alarmPomodoro.currentTime = 0;
    }

    const alarmTaskPlay=()=>{
        alarmTask.play()
    }

    const alarmTaskStop=()=>{
        alarmTask.pause()
        alarmTask.currentTime=0;
    }

    const alarmFinishSesion=()=>{
        alarmEndSesion.play();
    }
    //CambiarSong
    const changeSong=(song)=>{

        var index=Songs.findIndex( cancion => cancion==song )
        setIndexSong(index)

        if(reproduceId!='' && controlPlaylist.current){
            controlPlaylist.current.pause();
        }

        setTypeSong('Song')
        setReproduceSong( song.substring(0, song.length-4) )
    }

    const nextSong=()=>{

        if(indexSong == Songs.length-1 ){
            console.log('Maximo')
            changeSong(Songs[0])
        }
        else{

            changeSong(Songs[indexSong+1])
        }
    }

    const previewSong=()=>{
        if(indexSong-1 < 0 ){
            changeSong(Songs[Songs.length-1])
        }
        else{
            changeSong(Songs[indexSong-1])
        }
    }
    return <SongContext.Provider value={{
            activeTab,
            setActiveTab,
            playlists,
            setPlaylist,
            reproduceId,
            setReproduceId,
            Songs,
            reproduceSong,
            setReproduceSong,
            indexSong,
            setIndexSong,
            controlSong,
            pauseSong,
            setPauseSong,
            controlPlaylist,
            typeSong,
            setTypeSong,
            changeSong,
            nextSong,
            previewSong,
            alarmPomoPlay,
            alarmPomoStop,
            alarmTaskPlay,
            alarmTaskStop,
            alarmFinishSesion
    }}>
        {props.children}
    </SongContext.Provider>
}


