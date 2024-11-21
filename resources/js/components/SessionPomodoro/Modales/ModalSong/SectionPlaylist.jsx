import { useContext } from "react";
import Playlist from "./Playlist";
import { SongContext } from "../../Context/ContextSong";

const SectionPlaylist=()=>{
    let {playlists}=useContext(SongContext);
    return <>

        {
            playlists.length==0 ?
            <div>
                <div className="w-100 d-flex justify-content-center align-items-center" style={{height:'30vh'}}>
                    <div className="d-flex flex-column gap-2 align-items-center">
                        <div>
                            <i className="fa-brands fa-spotify" style={{scale:'6'}}></i>
                        </div>
                    </div>
                </div>
                <div className="d-flex w-100 justify-content-center mb-2">
                    <small>Busca una playlist de tu preferencia</small>
                </div>
            </div>

            :<div className='container overflow-y-auto overflow-x-hidden mt-3' id='ListPlaylist'>
                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-2 pt-1'>
                    {
                        playlists.map((playlist,id)=>(
                            <Playlist key={id} Playlist={playlist}  />
                        ))
                    }
                </div>
            </div>
    }

    </>
}

export default SectionPlaylist
