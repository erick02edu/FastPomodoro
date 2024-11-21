import SpotifyPlayer from "./SpotifyPlayer";
import SongPlayer from "./SongPlayer";
import { useContext } from "react";
import { SongContext } from "../Context/ContextSong";

export function BarraSong(){

    const {typeSong} =useContext(SongContext);

    // //style={{minHeight:'80px'}}
    return <div className='bg-body d-flex align-items-center rounded-3 border shadow' style={typeSong=="Song" ? {minHeight:"80px"} : {height:"80px"}}  >


        <div className='px-4 rounded-3 text-body'>
            <i className="fa-solid fa-arrow-right-arrow-left rounded-3" data-bs-toggle="modal" data-bs-target="#ModalSong"></i>
        </div>


        <SpotifyPlayer/>
        {
            typeSong=="Song" &&
             <SongPlayer/>
        }


    </div>
}


