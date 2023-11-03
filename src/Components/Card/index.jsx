import { Link } from "react-router-dom"
import Button from "../Button"
import styled from "styled-components"

const CardContainer = styled.div`
    text-align: center;
    width: 275px;
    height:275px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding: 1rem;
    transition: transform .2s;

    &:hover {
        transform: translate(0, -1rem);
    }
`
const Titulo = styled.h2`
    font-family: var(--fonte-secundaria);
    font-size: 1.25rem;
    color: var(--azul-escuro);
    line-height: 1.75rem;
    margin: 1.5rem 0 1.75rem;
`
const Descricao = styled.p`
    height:70px;
`

const Card = ( {name, description, html_url} ) => {
    return(
        <CardContainer>
            <Titulo> {name} </Titulo>

            <Descricao>{description}</Descricao>

           <Button> <Link to={html_url} className="botao"> Repositório </Link> </Button> 
        </CardContainer>
    )
}

export default Card