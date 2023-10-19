import styled from "styled-components"
import NavLinks from "../Navlink"

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content:center;
    padding: 1.5rem 7.5rem 1.5rem;
    align-items:center;
    column-gap: 3rem;

`
const Navbar = () => {

    return(
            <Nav>
              <NavLinks to="/">
                Home
              </NavLinks>

              <NavLinks to="/sobre">
                Sobre
              </NavLinks>

              <NavLinks to="/atividades">
                Atividades
              </NavLinks>
            </Nav>
    )
    
}

export default Navbar