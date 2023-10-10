import { Container } from "../Header/styles";
import  MovieTape  from "../../assets/movie-tape.svg"
import  Oscar  from "../../assets/oscar.svg"


function Card({ movieData }) {
    return (
        <div className="whole-card">
            <div className="wrapper-image-logo">
                <img src={MovieTape} />
            </div>
            <div className="wrapper-textbox">
                <div className="wrapper-items">
                    <h3>{movieData.name}</h3>
                    <p className="p-gray">{movieData.runtimeInMinutes} min</p>
                </div>

                <div className="awards">
                    <img src={Oscar} />
                    <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
                </div>
                
                <div className="wrapper-budget">
                    <div className="budget">
                        <h4>Budget</h4>
                        <p className="p-gray">${movieData.budgetInMillions}M</p>
                    </div>
                    <div className="revenue">
                        <h4>Revenue</h4>
                        <p className="p-gray">${movieData.boxOfficeRevenueInMillions}M</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Card;