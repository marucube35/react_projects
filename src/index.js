// React
import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './styles/index.css'

// Components
import { Techs } from './scripts/front_end_techs'
import { Subcribe } from './scripts/subcribe_form'
import { UserCard } from './scripts/user_card'
import { HexaColorGenerator } from './scripts/hex_generator'

const App = () => (
    <div className="container">
        <Techs />
        <Subcribe />
        <UserCard />
        <HexaColorGenerator />
    </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
