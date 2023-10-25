import styled from "styled-components"

const Botao = styled.button`
    display: inline-block;
    border-radius: 24px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    font-size: 1.125rem;
    background-color: var(--azul-medio);
    color: var(--branco);
    border: 3px solid var(--azul-medio);
    cursor: pointer;
    transition: 0.2s
`

const Button = ({children}) => {
    return( 
        <Botao>{children}</Botao>
    )
}

export default Button