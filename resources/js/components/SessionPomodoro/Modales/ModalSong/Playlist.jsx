import { useContext } from "react"
import { SongContext } from "../../Context/ContextSong";

const Playlist=({Playlist})=>{
    const {setReproduceId,setTypeSong,controlSong,reproduceId,setReproduceSong,typeSong}=useContext(SongContext);

    const playerPlaylist=()=>{
        if(typeSong=='Song'){
            controlSong.current.pause();
            setReproduceSong('');
            setTypeSong('Playlist')
        }
        setReproduceId(Playlist.id)
    }

    if(Playlist.images.length==0){
        Playlist.images=[{
            url:'https://programacion.net/files/article/20161110041116_image-not-found.png'
        }]
    }

    return<div className="col ">
        <div className='m-3 rounded-3 d-flex flex-column playlist' style={ Playlist.id!=reproduceId? {height:'120px',cursor:'pointer'}: {height:'120px',cursor:'pointer',border:'4px solid yellow'}}
        onClick={playerPlaylist}>
            <div className='h-100 flex-grow-1'>
                <img src={Playlist.images[0].url}
                className="w-100 h-100 rounded-3" alt={`Error`} />
            </div>
        </div>
    </div>
}
export default Playlist
