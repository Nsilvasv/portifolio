import "./index.css"
import { Link } from 'react-router-dom'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter'
import ft from "../../img/ft.avif"
import Button from "../../Components/Button";
import styled from "styled-components";

const Subtitulo = styled.span`
    color: red;
    font-size: 35px;

    @media (max-width: 460px) {
        font-size: 25px;
    }

`

const Home = () => {

    return(
        <div className="home">

            <div className="apresentacao">

                <h1 className="titulo">Olá, Eu sou Nathan</h1>

                <Subtitulo>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[' Desenvolvedor web', ' Bem-vindo!']}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={95}
                            deleteSpeed={60}
                            delaySpeed={1000}
                      
                        />
                </Subtitulo>

            
                <div>
                    <ul className='lista-icons'>

                        <li className='icons'> <Link to="https://github.com/Nsilvasv"><BsGithub/></Link> </li>
                        <li className='icons'> <Link to="https://www.instagram.com/nathansv_/"> <BsInstagram/></Link></li>   
                        <li className='icons'> <Link to="https://www.linkedin.com/in/nathan-silva-sv"><BsLinkedin/></Link> </li>
                    </ul>
                </div>
                
            </div>

            <div className="imagens">
                <img className="minhaFoto" src={ft} />
            </div>

         
        </div>
    )
}

export default Home