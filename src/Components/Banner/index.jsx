import "./index.css"
import { Link } from 'react-router-dom'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {

    return(
        <div className="banner">

            <div className="apresentacao">

                <h1 className="titulo">Olá, Eu sou Nathan

                </h1>


                <span style={{ color: 'red', fontWeight: 'normal', fontSize: '35px' }}>
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
                </span>

                <div>
                    <ul className='lista-icons'>

                        <li className='icons'> <Link to="https://github.com/Nsilvasv"><BsGithub/></Link> </li>
                        <li className='icons'> <Link to="https://www.instagram.com/nathansv_/"> <BsInstagram/></Link></li>   
                        <li className='icons'> <Link to="https://www.linkedin.com/in/nathan-silva-sv"><BsLinkedin/></Link> </li>
                    </ul>
                </div>
                
            </div>

            <div className="imagens">
                <img  className="minhaFoto" />
            </div>

         
        </div>
    )
}

export default Banner