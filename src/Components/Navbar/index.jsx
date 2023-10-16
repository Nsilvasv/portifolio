import styled from "styled-components"
import NavLinks from "../Navlink"

const Nav = styled.nav`
    height: 70px;
    display: flex;
    justify-content:center;
    padding: 2rem 7.5rem 2rem;
    align-items:center;
    column-gap: 3rem;
    background-color:white;

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