


export function BenefitsCard({title,content,icon}){
    return <div className="card flex-shrink-1 card-benefits" style={{borderTop:"16px #2196F3 solid"}}>
        <div className="card-body">

            <div className="d-flex justify-content-between align-items-center">
                <strong>{title}</strong>

                <i className={`${icon}`}></i>
            </div>

            <p className="mt-2">{content}</p>
        </div>
    </div>
}


