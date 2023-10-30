import styled from "styled-components"

const Rodape = styled.footer`
    padding: 0.5rem;
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bebebe;
`
const Texto = styled.p`
    font-size: 20px;
`
const Footer = () => {
    return (
        <Rodape>
            <Texto >&copy; Desenvolvido por Nathan</Texto>
        </Rodape>
    )
}

export default Footer