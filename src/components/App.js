// React
import React from 'react'

// Images
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import avatar from '../assets/images/avatar.png'
import check from '../assets/images/check.png'
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
import '../styles/FETechs.css'
import '../styles/SubcribeForm.css'
import '../styles/UserCard.css'
import '../styles/RGBColorGenerator.css'
import '../styles/NumberGenerator.css'
import '../styles/HexColorGenerator.css'
import '../styles/WorldPopulation.css'
import '../styles/DarkModeButton.css'
import '../styles/RandomCountries.css'
import '../styles/ThemeBackgrounds.css'
import '../styles/EventHandlers.css'
import '../styles/ObjectChasing.css'
import '../styles/UltimateValidation.css'

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
import EventHandlers from './EventHandlers'
import ObjectChasing from './ObjectChasing'
import UltimateValidation from './UltimateValidation'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'light'
        }
        this.seasons = {
            themes: ['Spring', 'Summer', 'Autumn', 'Winter'],
            backgrounds: [spring, summer, autumn, winter],
            buttonColors: ['#e55e75', '#fbf88d', '#b61a25', '#218ec9'],
            colors: ['#fff', '#000', '#fff', '#fff']
        }
        this.timeOfDays = {
            themes: ['Morning', 'Noon', 'Evening', 'Night'],
            backgrounds: [morning, noon, evening, night],
            buttonColors: ['#ffb4b4', '#fff9ca', '#ffdeb4', '#b2a4ff'],
            colors: ['#fff', '#000', '#000', '#fff']
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
                <FETechs logos={[html, css, js, react]} />
                <SubcribeForm />
                <UserCard avatar={avatar} check={check} />
                <RGBColorGenerator />
                <NumberGenerator quantity={32} />
                <HexColorGenerator quantity={32} />
                <WorldPopulation />
                <DarkModeButton
                    state={this.state}
                    changeMode={this.changeMode}
                />
                <RandomCountries />
                <ThemeBackgrounds data={this.seasons} />
                <ThemeBackgrounds data={this.timeOfDays} />
                <EventHandlers />
                <ObjectChasing />
                <UltimateValidation />
            </div>
        )
    }
}
