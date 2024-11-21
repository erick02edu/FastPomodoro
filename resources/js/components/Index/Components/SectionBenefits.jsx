import { BenefitsCard } from "./BenefitsCard"

export function SectionBenefits(){
    return <div className="py-5" id="beneficios">
        <h3 className="mb-4">
           <strong> Beneficios</strong>
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-3">

            <div className="col">
                <BenefitsCard
                title={"Optimiza tu tiempo"}
                content={"Con nuestro enfoque basado en sesiones de estudio podrás reducir tus tiempo de estudios"}
                icon={"fa-solid fa-hourglass"}
                />
            </div>

            <div className="col">
                <BenefitsCard
                title={"Personaliza tus tareas"}
                content={"Define los tiempos y descansos asi como el numero de ciclos de tus tareas"}
                icon={"fa-solid fa-screwdriver-wrench"}
                />
            </div>

            <div className="col">
                <BenefitsCard
                title={"Agrupa tareas relacionadas"}
                content={"Agrupa tus tareas bajo un proyecto o categoría manteniendo un tema de enfoque"}
                icon={"fa-solid fa-layer-group"}
                />
            </div>
        </div>

    </div>
}

