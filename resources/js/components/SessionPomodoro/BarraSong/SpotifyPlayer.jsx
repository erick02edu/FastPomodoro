import React, { useEffect, useContext, useRef, useState } from 'react';
import { SongContext } from '../Context/ContextSong';

const SpotifyPlayer = () => {

    var {controlPlaylist,reproduceId,typeSong,setReproduceSong}=useContext(SongContext)
    var Player=useRef()

    useEffect(()=>{
        if(typeSong=='Playlist'){
            if(!controlPlaylist.current){
                window.onSpotifyIframeApiReady=(IFrameAPI) => {
                    const element = Player?.current
                    const options = {
                        width: '100%',
                        height: '100%',
                        uri: `https://open.spotify.com/playlist/${reproduceId}`
                    };

                    const callback= (EmbedController) => {
                        controlPlaylist.current = EmbedController;
                        controlPlaylist.current.play()
                    };

                    IFrameAPI.createController(element, options, callback);
                };
            }
        }
    },[typeSong])

    useEffect(()=>{
        if (controlPlaylist.current) {
            controlPlaylist.current.loadUri(`https://open.spotify.com/playlist/${reproduceId}`);
            controlPlaylist.current.play();
        }
    },[reproduceId])

    return <span className={ typeSong=="Playlist" ? 'w-100 h-100 d-flex align-items-center' : 'w-100 h-100 d-none'} >
            <div id="reproductor" className='d-flex align-ite' ref={Player} >
            </div>
    </span>




};

export default SpotifyPlayer;
