import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Atividades from "../Pages/Atividades"
import Navbar from "../Components/Navbar"
import Posts from "../Pages/Posts"
import Sobre from "../Pages/Sobre"
import Error from "../Pages/Error"

const Rotas = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/posts" element={ <Posts/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="/atividades" element={ <Atividades/> } />
                <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas