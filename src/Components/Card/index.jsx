import { Link } from "react-router-dom"
import "./index.css"
import Button from "../Button"

const Card = ( {name, description, html_url} ) => {
    return(
        <div className="card">
            <h2 className="tituloCard"> {name} </h2>

            <p className="descricao">{description}</p>

           <Button> <Link to={html_url} className="botao"> Repositório </Link> </Button> 
        </div>
    )
}

export default Card