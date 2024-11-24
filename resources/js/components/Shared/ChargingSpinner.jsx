
export function ChargingSpinner({tamaño="N"}){
    switch(tamaño){
        case "N": return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden" >Loading...</span>
        </div>
        case "sm": return <div className="spinner-border spinner-border-sm text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

    }
}

