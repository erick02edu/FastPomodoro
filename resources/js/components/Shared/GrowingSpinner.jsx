export function GrowingSpinner(){
    return <div className="d-flex w-100 justify-content-center gap-2 my-3">
        <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}


