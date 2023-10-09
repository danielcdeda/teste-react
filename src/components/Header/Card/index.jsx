import { Container } from "../../Header/styles";
import { MovieTape } from "../../../assets/movie-tape.svg"
import { Oscar } from "../../../assets/oscar.svg"

 
function Card({movieData}) {
    return (
        <Container>
        <div className="image-logo">
            <img src={MovieTape} />
        </div>
        <div className="wrapper-items">
            <h3>Movie Title</h3>
            <p>179 min</p>
        </div>
        <div className="awards">
            <img src={Oscar}/>
        </div>
            {movieData.name} 
        </Container>
    )
}

export default Card;