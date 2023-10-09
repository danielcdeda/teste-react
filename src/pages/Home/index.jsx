import { useEffect, useState } from "react"
import api from '../../services/api.js'
import { Container } from "../../components/Header/styles.js";
import Card from "../../components/Header/Card/index.jsx";


function Home() {
    const [movies, setMovies] = useState()

    useEffect(() => {
        async function loadData() {
            const {
                data: { docs },
            } = await api.get('movie')

            setMovies(docs)
            console.log(docs)

        }

        loadData();
    }, [])

    return (
       <Container>
       
        { movies && movies.map( movie => (
            <Card movieData={movie} key={movie._id}/>
        ))}
       </Container>
    )
}

export default Home