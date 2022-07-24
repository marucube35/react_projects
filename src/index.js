// React
import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './main.css'

// Components
import { Techs } from './front_end_techs'
import { Subcribe } from './subcribe_form'
import { UserCard } from './user_card'
import { RGBColorGenerator } from './rgb_generator'
import { NumberGenerator } from './number_generator'
import { HexColorGenerator } from './hex_generator'
import { WorldPopulation } from './world_population'
import { DarkModeButton } from './dark_mode'
import { RandomCountries } from './random_country'
import { SeasonBackground } from './season_background'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'light'
        }
    }
    changeMode = () => {
        this.setState({
            mode: this.state.mode === 'light' ? 'dark' : 'light'
        })
    }
    render() {
        return (
            <div className={`container ${this.state.mode}-mode`}>
                <Techs />
                <Subcribe />
                <UserCard />
                <RGBColorGenerator />
                <NumberGenerator quantity={32} />
                <HexColorGenerator quantity={32} />
                <WorldPopulation />
                <DarkModeButton
                    state={this.state}
                    changeMode={this.changeMode}
                />
                <RandomCountries />
                <SeasonBackground />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
