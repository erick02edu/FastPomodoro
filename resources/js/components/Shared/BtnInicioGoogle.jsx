export function BtnInicioGoogle({text}){

    return <form  method="GET" action="/login-google">
        <button className="w-100 bg-white border border-btn-border py-1 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
        style={{width:'18px',height:'18px'}} className=" me-2" alt="" />
            {text}
        </button>
    </form>

}




