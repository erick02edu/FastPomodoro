import { useContext } from "react"
import { SongContext } from "../../Context/ContextSong"
import SongsPlay from "./SongsPlay"

export function SectionSongs(){

    const {Songs}=useContext(SongContext)

    return  <div className="d-flex flex-column gap-3 overflow-y-auto ">
        {
            Songs.map((song,index)=>(
                <SongsPlay key={index} song={song}/>
            ))
        }
    </div>
}



