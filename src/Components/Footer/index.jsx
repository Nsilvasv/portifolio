import styled from "styled-components"

const Rodape = styled.footer`
    padding: 0.5rem;
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bebebe;
`

const Footer = () => {
    return (
        <Rodape>
            <p >&copy; Desenvolvido por Nathan</p>
        </Rodape>
    )
}

export default Footer