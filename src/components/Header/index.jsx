import { useRef } from 'react'
import Icon from '../../assets/icon.svg'
import { TopHeader } from './styles'
import { Container } from './styles'
import { useEffect, useState } from 'react'


function Header({ movies, setFilteredMovies }) {
    const [aveValues, setAveValues] = useState({
        runtime: 0,
        budget: 0,
    })

    useEffect(() => {
        aveMovies(movies)
    }, [movies])

    const input = useRef();
    
    function aveMovies(movies) {
        const runtime = movies.reduce( (acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length
        const budget = movies.reduce( (acc, cur) => cur.budgetInMillions + acc, 0) / movies.length

        setAveValues({
            runtime,
            budget
        })
    }

    function inputChange() {
        const searchText = input.current.value.toLowerCase();
        const newMovies = movies.filter((movie) =>
          movie.name.toLowerCase().includes(searchText)
        );
        aveMovies(newMovies)
        setFilteredMovies(newMovies);
    
    }
    return (
        <>
            <TopHeader>
                <img src={Icon} alt='conv-icon'/>
                <p>Senior Front End Test</p>
            </TopHeader>
        <Container>
            <div className='ave-values'>
            <h1>Lord Of The Rings Movies</h1>    
                    <p>Ave. movie runtime: {aveValues.runtime} min</p>
                    <p>Ave. movie budget: ${aveValues.budget}M</p>
            </div>
            <div>
                    <input type="text" className='input' placeholder='Filter movies by name' ref={input} onChange={inputChange}/>
            </div>
        </Container>
        </>
    )
}

export default Header