// React
import React from 'react'

// Images
import spring from '../assets/images/spring.jpg'
import summer from '../assets/images/summer.jpg'
import autumn from '../assets/images/autumn.jpg'
import winter from '../assets/images/winter.jpg'
import morning from '../assets/images/morning.jpg'
import noon from '../assets/images/noon.jpg'
import evening from '../assets/images/evening.jpg'
import night from '../assets/images/night.jpg'

// CSS
import '../styles/main.css'

// Components
import FETechs from './FETechs'
import SubcribeForm from './SubcribeForm'
import UserCard from './UserCard'
import RGBColorGenerator from './RGBColorGenerator'
import NumberGenerator from './NumberGenerator'
import HexColorGenerator from './HexColorGenerator'
import WorldPopulation from './WorldPopulation'
import DarkModeButton from './DarkModeButton'
import RandomCountries from './RandomCountries'
import ThemeBackgrounds from './ThemeBackgrounds'

export default class App extends React.Component {
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
                <FETechs />
                <SubcribeForm />
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
