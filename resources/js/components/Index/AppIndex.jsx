import { createRoot } from "react-dom/client";
import { Menu } from "./Components/Menu";
import { SectionWelcome } from "./Components/SectionWelcome";
import { ContentIndex } from "./Components/ContentIndex";
import { FooterIndex } from "./Components/Footer.Index";
import { Routes, Route, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Index from "./Pages/Index";

export default function AppIndex(){

    return (
        <BrowserRouter>
           
            <Routes>

                <Route path="/" element={
                    <Index/>
                }/>

            </Routes>

        </BrowserRouter>
    )
}


if(document.getElementById("appIndex")){
    createRoot(document.getElementById("appIndex")).render(<AppIndex/>)
}


