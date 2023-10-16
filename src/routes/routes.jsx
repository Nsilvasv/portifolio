import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Sobre from "../Pages/Sobre"
import Atividades from "../Pages/Atividades"
import Navbar from "../Components/Navbar"

const Rotas = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="/atividades" element={ <Atividades/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas