import { useState, useEffect  } from "react"
import "./index.css"
import Card from "../../Components/Card"

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
        <div className="container">

            {
                repositorio.length > 0 ? (
                    
                    <div className="atividades">
                        {repositorio.map( (repo) => (
                            <Card key={repo.id} 
                                name={repo.name} 
                                description={repo.description} 
                                html_url={repo.html_url} 
                             />
                        ))}

                    </div>
                ) : (

                <p>Carregando repositórios...</p>
                
                )
            }

        </div>
    )
}

export default Atividades