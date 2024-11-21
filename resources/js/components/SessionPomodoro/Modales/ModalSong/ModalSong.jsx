import {useContext } from "react";
import { SongContext } from "../../Context/ContextSong";
import SearchBarraPlaylist from "./SearchBarraPlaylist";
import SectionPlaylist from "./SectionPlaylist";
import SongsPlay from "./SongsPlay";
import { SectionSongs } from "./SectionSongs";

const ModalSong=()=>{

    const {activeTab,setActiveTab,Songs}=useContext(SongContext)

    const handleTabChange = (e) =>{
        setActiveTab(e.target.dataset.bsTarget.substring(1))
    }

    return <div className="modal fade" id="ModalSong" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content bg-body text-body">
                <div className="modal-header border-body  d-flex flex-column gap-3 p-0">

                    <div className="d-flex justify-content-between px-1 pt-3  w-100 px-3 align-items-center h-100">
                        <h5 className="modal-title" id="exampleModalLabel">Elegir {activeTab}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="d-flex justify-content-start w-100 justify-content-between">
                        <ul className="nav nav-tabs border-body" id="myTab" role="tablist">

                            <li className="nav-item" role="presentation ">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Songs" type="button" role="tab" aria-controls="home" aria-selected="true" onClick={handleTabChange}>
                                    Songs
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Playlist" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={handleTabChange}>
                                    Playlist
                                </button>
                            </li>

                        </ul>

                        <div className="me-3 d-flex gap-2 align-items-center">
                            <SearchBarraPlaylist/>
                        </div>

                    </div>

                </div>

                <div className="modal-body ">
                    {/*TABS*/}
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active " id="Songs" role="tabpanel" aria-labelledby="home-tab">
                            <SectionSongs/>
                        </div>
                        <div className="tab-pane fade" id="Playlist" role="tabpanel" aria-labelledby="profile-tab">
                            <SectionPlaylist/>
                        </div>
                    </div>
                </div>

                <div className="modal-footer border-body ">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

}

export default ModalSong;



