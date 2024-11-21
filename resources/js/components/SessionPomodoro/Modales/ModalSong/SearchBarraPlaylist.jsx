
import { useContext, useRef } from "react";
import { SongContext } from "../../Context/ContextSong";

const SearchBarraPlaylist=()=>{

    let ClientID= `${import.meta.env.VITE_CLIENT_ID_SPOTIFY}`
    let keyID= import.meta.env.VITE_KEY_SPOTIFY
    let token=null;
    let InputPlaylist=useRef(null)
    const {setPlaylist}=useContext(SongContext)

    const BuscarPlaylist=async()=>{

        let busqueda=InputPlaylist.current.value
        if(token==null){
            token=await getToken()
        }

        let playlists=await searchAlbumsSpotify(token,busqueda);
        setPlaylist(playlists);
    }

    const getToken= async()=>{

        const result=await fetch('https://accounts.spotify.com/api/token',{
            method:'POST',
            headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Basic `+ btoa( ClientID + ':'+ keyID)
            },
            body:'grant_type=client_credentials'
        })

        const data= await result.json();
        return data.access_token;
    };

    const searchAlbumsSpotify=async (token,busqueda)=>{

        let endpoint=`https://api.spotify.com/v1/search?q=${encodeURIComponent(busqueda)}&type=playlist`

        const response=await fetch(endpoint,{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        const data=await response.json();
        return data.playlists.items
    }

    return <>
        <input type="text" className="rounded-4 bg-white text-dark border border-bg-dark-secondary py-1 px-3 custom-outline"
        placeholder="Busca tu playlist..." ref={InputPlaylist} />
        <button className="btn btn-primary  text-white rounded-circle" onClick={BuscarPlaylist}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </>
}

export default SearchBarraPlaylist;


