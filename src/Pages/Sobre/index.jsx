import "./index.css"
import ftReact from "../../img/react.svg"
import ftjs from "../../img/js.svg"
import ftcss from "../../img/css.svg"
import fthtml from "../../img/html.svg"

const Sobre = () => {
    return(
        <div className="sobre">
            <div>
                <p className="paragrafo">Olá, me chamo Nathan, sou Desenvolvedor de Software Front-end, me considero um entusiasta da tecnologia, cada dia sou mais fascinado por essa área e pela coisas que se pode criar. Com isso, espero retribuir ajudando pessoas a construir suas ideias por meio da tecnologia.</p>
                 
            </div>

            <div className="tec">
                
                <h2>Tecnologias conhecidas</h2>

                <div className="divft">
                    <img src={ftReact} className="logo"/>
                    <img src={ftjs} className="logo"/>
                    <img src={ftcss} className="logo"/>
                    <img src={fthtml} className="logo"/>
                </div>

            </div>           
          
        </div>
    )
}

export default Sobre