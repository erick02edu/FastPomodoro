
import { useContext,useEffect } from "react"
import { createSessionContext } from "../../Context/ContextCreateSession"

export function CarouselItemNameSesion(){

    const {formSesion,inputChange,validationInput}=useContext(createSessionContext);

    useEffect(()=>{
        validationInput();
    },[formSesion.name])


    return  <div className="carousel-item active h-100 ">
            <div className="row px-5 h-100">
                <div className="col-12 col-lg-6  pt-3 align-self-center">
                    <p>Ponle un nombre a tu sesión</p>
                    <input type="text" name="name" value={formSesion.name}
                    onChange={inputChange}
                    className=" form-control" placeholder="Nombre de la sesión"></input>
                </div>

                <div className="col-12 col-lg-6 pt-3 pt-lg-0  align-self-lg-center">
                    <div className="d-flex align-items-lg-center justify-content-center h-100">
                        <div className="w-50">
                            <img src="https://static.vecteezy.com/system/resources/previews/023/092/208/non_2x/cute-cartoon-character-of-intelligent-human-brain-with-glasses-meditating-vector.jpg"
                            className=" w-100 rounded-circle border border-danger" alt="error" style={{height:"150px"}} />
                        </div>
                    </div>
                </div>
            </div>

{/*
        <div className="row row-cols-1 row-cols-md-2 justify-content-start px-5 align-items-center h-100" >
            <div className="h-100 d-flex flex-column justify-content-center">
                <p>Ponle un nombre a tu sesión</p>
                <input type="text" name="name" value={formSesion.name}
                onChange={inputChange}
                className=" form-control" placeholder="Nombre de la sesión"></input>
            </div>

            <div className="d-flex align-items-center justify-content-center h-100">
                <div className="w-50">
                    <img src="https://static.vecteezy.com/system/resources/previews/023/092/208/non_2x/cute-cartoon-character-of-intelligent-human-brain-with-glasses-meditating-vector.jpg"
                    className="h-75 w-100 rounded-circle" alt="" />
                </div>
            </div>
        </div> */}
    </div>

}
