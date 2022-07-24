// React
import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './main.css'

// Images
import spring from './theme_backgrounds/images/spring.jpg'
import summer from './theme_backgrounds/images/summer.jpg'
import autumn from './theme_backgrounds/images/autumn.jpg'
import winter from './theme_backgrounds/images/winter.jpg'
import morning from './theme_backgrounds/images/morning.jpg'
import noon from './theme_backgrounds/images/noon.jpg'
import evening from './theme_backgrounds/images/evening.jpg'
import night from './theme_backgrounds/images/night.jpg'

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
import { ThemeBackgrounds } from './theme_backgrounds'

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
        const seasons = {
            themes: ['Spring', 'Summer', 'Autumn', 'Winter'],
            backgrounds: [spring, summer, autumn, winter],
            buttonColors: ['#e55e75', '#fbf88d', '#b61a25', '#218ec9'],
            colors: ['#fff', '#000', '#fff', '#fff']
        }
        const timeOfDays = {
            themes: ['Morning', 'Noon', 'Evening', 'Night'],
            backgrounds: [morning, noon, evening, night],
            buttonColors: ['#ffb4b4', '#fff9ca', '#ffdeb4', '#b2a4ff'],
            colors: ['#fff', '#000', '#000', '#fff']
        }
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
                <ThemeBackgrounds data={seasons} />
                <ThemeBackgrounds data={timeOfDays} />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
