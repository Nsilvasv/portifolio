import "./index.css"

import ftNode from "../../img/node-js.svg"
import ftReact from "../../img/react.svg"
import ftjs from "../../img/js.svg"
import ftcss from "../../img/css.svg"
import fthtml from "../../img/html.svg"

const Sobre = () => {
    return(
        <div className="sobre">
            <div>
                <p className="paragrafo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 
            </div>

            <div className="tec">
                
                <h2>Tecnologias conhecidas</h2>

                <div className="divft">
                    <img src={ftNode} className="logo"/>
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