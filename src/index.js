// React
import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'

// Components
import { Techs } from './front_end_techs'
import { Subcribe } from './subcribe_form'
import { UserCard } from './user_card'
import { RGBColorGenerator } from './rgb_generator'
import { NumberGenerator } from './number_generator'
import { HexColorGenerator } from './hex_generator'

const App = () => (
    <div className="container">
        <Techs />
        <Subcribe />
        <UserCard />
        <RGBColorGenerator />
        <NumberGenerator quantity={32} />
        <HexColorGenerator quantity={32} />
    </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
