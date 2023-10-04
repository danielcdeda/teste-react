import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import GlobalStyles from './styles/globalStyles'
import Header from '../src/components/Header/index'



function App() {
    return (
    <div>
        <Header />
        <GlobalStyles />
        <Home />
    </div>
);
}

export default App;

