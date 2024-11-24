export function LogoFastPomodoro({color="text-primary",link=false}){
    return <>
        {
            link ? <a href="/" className="text-decoration-none">
                <div className={`${color}`} >
                    <i className="fa-solid fa-hourglass-end"></i> FastPomodoro
                </div>
            </a>
            :<div className={`${color}`} >
                <i className="fa-solid fa-hourglass-end"></i> FastPomodoro
            </div>
        }
    </>
}


