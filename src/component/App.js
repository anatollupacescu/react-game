import React from 'react'
import logo from '../logo.svg';
import Game from '../container/Game';
import '../App.css';

const App = () => (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <hr/>
            <div className="App-intro">
                <Game/>
            </div>
        </div>
)

export default App