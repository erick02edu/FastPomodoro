import React from 'react';
import { createRoot } from "react-dom/client"
import { ImgLogin } from '../Components/ImgLogin';
import { SectionLogin } from '../Components/SectionLogin';

export default function AppLogin() {
    return (
        <>
            <div className="container-fluid ">

                <div className="row row-cols-1 row-cols-md-2 position-relative">

                    <div className="p-0 d-none d-md-block" style={{height:'100vh'}}>
                        <ImgLogin/>
                    </div>

                    <div className=" justify-content-center d-flex  align-items-center" style={{height:'100vh'}}>
                        <div className='d-flex flex-column gap-3 py-2' style={{width:'80%'}} >
                            <SectionLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


if(document.getElementById('appLogin')){
    createRoot(document.getElementById('appLogin')).render(<AppLogin/>)
}


