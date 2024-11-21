import { BenefitsCard } from "./BenefitsCard";
import { DescriptionPlataform } from "./DescriptionPlataform";
import { FooterIndex } from "./Footer.Index";
import { SectionBenefits } from "./SectionBenefits";
import { SectionIntegrations } from "./SectionIntegrations";
import { SectionProductividad } from "./SectionProductividad";


export function ContentIndex(){
    return <div className="container py-5">

        <DescriptionPlataform/>

        <SectionProductividad/>

        <SectionBenefits/>

        <SectionIntegrations/>
    </div>

}





