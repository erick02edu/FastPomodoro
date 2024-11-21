import { useContext } from "react";
import { SongContext } from "../../Context/ContextSong";

const SongsPlay=({song})=>{

    const {pauseSong,controlSong,reproduceSong,changeSong}=useContext(SongContext)

    return <div className="bg-body-secondary border rounded-3 px-3 py-2 d-flex justify-content-between align-items-center cursor-pointer"
    style={{cursor:'pointer'}}
    onClick={ ()=> changeSong(song) } >

        <div>Canción: {song.substring(0, song.length-4)}</div>
        {
            reproduceSong==song.substring(0, song.length-4) && pauseSong==true ?
                <i className="fa-solid fa-play text-primary" onClick={()=>controlSong.current.play()}></i>
            : reproduceSong==song.substring(0, song.length-4) && pauseSong==false ?
                <i className="fa-solid fa-pause text-primary" onClick={()=>controlSong.current.pause()}></i>
            : reproduceSong=='' || reproduceSong!=song.substring(0, song.length-4)  ?
                <i className="fa-solid fa-play text-white" onClick={()=>changeSong(song)}></i>
            : null

        }
    </div>
}

export default SongsPlay;


