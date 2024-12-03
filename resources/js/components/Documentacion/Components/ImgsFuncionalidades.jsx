
export function ImgsFuncionalidades({urlImg="",heightImg="230px"}){

    return <>
        <div className="py-3 border rounded-2 shadow d-flex justify-content-center">
            <img loading="lazy" src={`${import.meta.env.VITE_API_URL}/${urlImg}`} className="shadow-lg rounded-1 img-fluid"  style={{height:heightImg}} ></img>
        </div>
    </>

}




