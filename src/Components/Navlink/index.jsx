import { NavLink, useLocation } from "react-router-dom"
import "./index.css"
const NavLinks = ({children, to}) => {

    const localizacao = useLocation()

    return(
        <div>
              <NavLink className={`
                ${"link"}
                ${localizacao.pathname === to ?  "linkDestacado" : '/'}`} 
                to={to}>
                    {children}
                </NavLink>
        </div>
    )  
}

export default NavLinks