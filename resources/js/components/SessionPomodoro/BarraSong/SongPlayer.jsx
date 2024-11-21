import { useContext, useEffect, useState } from "react";
import { SongContext } from "../Context/ContextSong";

const SongPlayer=()=>{
    //COntador para evitar ejecucion de un useEffect
    var [count,setCount]=useState(0);

    //Audio actual
    const {pauseSong,reproduceSong,controlSong,setPauseSong,typeSong,previewSong,nextSong}=useContext(SongContext)
    const [audioUrl,setAudioURL] = useState( `${import.meta.env.VITE_API_URL}/Songs/${reproduceSong}.mp3` ) ;
    const {volumen,setVolumen}=useState(0.5);

    useEffect(()=>{
        controlSong.current.pause();
        setAudioURL(`${import.meta.env.VITE_API_URL}/Songs/${reproduceSong}.mp3`)
    },[reproduceSong])

    useEffect(()=>{

        const handlePlay=()=>{
            //AQUI DESTRUIR SONG DE SPOTIFY
            //console.log('CAMBIANDO A SONG')
            setPauseSong(false)
        }

        const handlePause=()=>{
            setPauseSong(true)
        }

        controlSong.current.addEventListener('play',()=>{
            handlePlay()
        })
        controlSong.current.addEventListener('pause',()=>{
            handlePause()
        })

        //Cleanup
        return () => {
            if (controlSong.current) {
              controlSong.current.removeEventListener('play', handlePlay);
              controlSong.current.removeEventListener('pause', handlePause);
            }
        };

    },[])

    useEffect(()=>{
        if (controlSong.current && count>0) {
            controlSong.current.load();
            controlSong.current.play();
        }
        setCount(prevCount=>prevCount+1)
    },[audioUrl])

    const cambiarVolumen=(event)=>{

        controlSong.current.volume=event.target.value
    }

    return <div className={ typeSong=="Song" ? 'w-100' : 'w-100  d-none'}>

        {
            typeSong=="Song" ?         <div className="d-flex align-items-center h-100 py-4">
            <span className="text-body d-flex flex-column flex-md-row gap-3 gap-md-4 justify-content-between px-1 align-items-center w-100">

                <div className="d-flex gap-1">
                    <strong className="d-block d-md-none">Canción actual: </strong>
                    <span> {reproduceSong}</span>
                </div>


                <div className="d-flex align-items-center justify-content-between px-4 px-md-0 justify-content-md-around flex-md-grow-1 w-100">
                    <div>
                        <span>
                            <i className="fa-solid fa-backward" onClick={previewSong}></i>
                        </span>
                    </div>

                    <div>
                        {
                            pauseSong==true ?
                                <i className="fa-solid fa-play" onClick={()=>controlSong.current.play()}></i>
                            :
                                <i className="fa-solid fa-pause" onClick={()=>controlSong.current.pause()}></i>
                        }
                    </div>

                    <div>
                        <span>
                            <i className="fa-solid fa-forward" onClick={nextSong}></i>
                        </span>
                    </div>

                </div>


                <div className="d-flex align-items-center pe-4 gap-3">
                    <i className="fa-solid fa-volume-high"></i>
                    <input type="range" name="range" id="" min='0'  max='1' step='.1' value={volumen} onChange={cambiarVolumen}
                    className=" form-range range-volumen"/>
                </div>
            </span>


        </div> : <></>

        }

        <audio  ref={controlSong} loop className="bg-warning text-warning">
            <source src={audioUrl} type="audio/mp3" className="bg-warning text-warning" />
        </audio>
        {/* <div className="d-flex align-items-center h-100 py-4">
            <span className="text-body d-flex flex-column flex-md-row gap-3 gap-md-4 justify-content-between px-1 align-items-center w-100">

                <div className="d-flex gap-1">
                    <strong className="d-block d-md-none">Canción actual: </strong>
                    <span> {reproduceSong}</span>
                </div>


                <div className="d-flex align-items-center justify-content-between px-4 px-md-0 justify-content-md-around flex-md-grow-1 w-100">
                    <div>
                        <span>
                            <i className="fa-solid fa-backward" onClick={previewSong}></i>
                        </span>
                    </div>

                    <div>
                        {
                            pauseSong==true ?
                                <i className="fa-solid fa-play" onClick={()=>controlSong.current.play()}></i>
                            :
                                <i className="fa-solid fa-pause" onClick={()=>controlSong.current.pause()}></i>
                        }
                    </div>

                    <div>
                        <span>
                            <i className="fa-solid fa-forward" onClick={nextSong}></i>
                        </span>
                    </div>

                </div>


                <div className="d-flex align-items-center pe-4 gap-3">
                    <i className="fa-solid fa-volume-high"></i>
                    <input type="range" name="range" id="" min='0'  max='1' step='.1' value={volumen} onChange={cambiarVolumen}
                    className=" form-range range-volumen"/>
                </div>
            </span>

            <audio  ref={controlSong} loop className="bg-warning text-warning">
                <source src={audioUrl} type="audio/mp3" className="bg-warning text-warning" />
            </audio>
        </div> */}
    </div>

}

export default SongPlayer
