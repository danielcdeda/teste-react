import { useEffect, useState } from "react"
import api from '../../services/api.js'
import { Container } from "../../components/Card/styles.js";
import Card from "../../components/Card/index.jsx";
import {ContainerItems }  from "./styles.js"

function Home() {
    const [movies, setMovies] = useState()
    const [filteredMovies, setFilteredMovies] = useState()

    useEffect(() => {
        async function loadData() {
            const {
                data: { docs },
            } = await api.get('movie')

            setMovies(docs)
            setFilteredMovies(docs)
            console.log(docs)

        }

        loadData();
    }, [])

    return (
        
       <Container>
        <ContainerItems>
            { filteredMovies && filteredMovies.map( movie => (
                <Card movieData={movie} key={movie._id}/>
            ))}
            </ContainerItems>
       </Container>
    )
}

export default Home