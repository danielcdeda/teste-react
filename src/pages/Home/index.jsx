
import api from '../../services/api.js'
import { Container } from "../../components/Card/styles.js";
import Card from "../../components/Card/index.jsx";
import {ContainerItems }  from "./styles.js"

function Home({ filteredMovies }) {
    return (
      <Container>
        <ContainerItems>
          {filteredMovies && filteredMovies.map((movie) => (
            <Card movieData={movie} key={movie._id} />
          ))}
        </ContainerItems>
      </Container>
    );
  }

export default Home