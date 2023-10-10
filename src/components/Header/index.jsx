import { useRef } from 'react'
import Icon from '../../assets/icon.svg'
import { TopHeader } from './styles'
import { Container } from './styles'


function Header({movies, setFilteredMovies}) {
    const input = useRef()

    function inputChange (){
        const newMovies = movies.filter( movie => movie.name.includes(input.current.value))
        setFilteredMovies(newMovies)
        console.log(input.current.value)
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
                    <p>Ave. movie runtime: xxx min</p>
                    <p>Ave. movie budget: $XXM</p>
            </div>
            <div>
                    <input type="text" className='input' placeholder='Filter movies by name' ref={input} onChange={inputChange}/>
            </div>
        </Container>
        </>
    )
}

export default Header