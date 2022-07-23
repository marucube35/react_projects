// React
import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'

// Components
import { Techs } from './scripts/front_end_techs'
import { Subcribe } from './scripts/subcribe_form'
import { UserCard } from './scripts/user_card'
import { RGBColorGenerator } from './scripts/rgb_generator'
import { NumberGenerator } from './scripts/number_generator'
import { HexColorGenerator } from './scripts/hex_generator'

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
