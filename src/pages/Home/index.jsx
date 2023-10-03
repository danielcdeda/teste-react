import { useEffect } from "react"
import api from '../../services/api.js'

function Home() {
    useEffect(() => {
        async function loadData() {
            const {
                data: { docs },
            } = await api.get('movie')
            console.log(docs)
        }

        loadData();
    }, [])

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

export default Home