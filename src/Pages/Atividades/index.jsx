import { useState, useEffect  } from "react"
import "./index.css"
import Card from "../../Components/Card"
import styled from "styled-components"

const Atividade = styled.div`
    background: rgb(111,111,111);
    background: linear-gradient(0deg, rgba(111,111,111,1) 0%, rgba(189,189,189,1) 0%, rgba(198,198,198,1) 20%, rgba(255,255,255,1) 100%);
`
const CarContainer = styled.div`
    padding: 5rem 3.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`
const Loading = styled.p`
    margin-top: 250px;
    text-align: center;
    font-weight: 400;
    font-size: 25px;
    
`

const Atividades = () => {

    const [repositorio, setRepositorio] = useState([])

    useEffect( () => {
        const busca = async () => {

            const response = await fetch("https://api.github.com/users/Nsilvasv/repos")
            const data = await response.json()
            setRepositorio(data)
        }
        busca()
    }, [])

    return(
        <Atividade>

            {
                repositorio.length > 0 ? (
                    
                    <CarContainer>
                        {repositorio.map( (repo) => (
                            <Card key={repo.id} 
                                name={repo.name} 
                                description={repo.description} 
                                html_url={repo.html_url} 
                             />
                        ))}

                    </CarContainer>
                ) : (

                <Loading>Carregando repositórios...</Loading>
                
                )
            }

        </Atividade>
    )
}

export default Atividades