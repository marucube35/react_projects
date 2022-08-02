// React
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
    Prompt,
    withRouter
} from 'react-router-dom'

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
import '../styles/main.scss'
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
import Navbar from './Navbar'

function NotFound() {
    return <div className="wrapper">The page you looking for is not found</div>
}

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
        this.validators = {
            firstName: [
                { func: 'isAlpha' },
                { func: 'isLength', options: { min: 3, max: 12 } }
            ],
            lastName: [
                { func: 'isAlpha' },
                { func: 'isLength', options: { min: 3, max: 12 } }
            ],
            email: [{ func: 'isEmail' }],
            tel: [{ func: 'isMobilePhone' }],
            weight: [{ func: 'isAlphanumeric' }],
            country: [{ func: 'isAlpha' }]
        }
        this.messages = {
            firstName:
                "Name's length must be between 3 and 12 and only characters are accepted.",
            lastName:
                "Name's length must be between 3 and 12 and only characters are accepted.",
            email: 'Email is invalid, valid format: example@domain.com',
            tel: "Telephone's length must be between 6 and 12 and only numbers are accepted.",
            weight: 'Weight must be positive number.',
            country: 'You have not selected the country.'
        }
    }

    changeMode = () => {
        this.setState({
            mode: this.state.mode === 'light' ? 'dark' : 'light'
        })
    }

    render() {
        return (
            <Router>
                <div className={`App ${this.state.mode}-mode`}>
                    <div className="sidebar">
                        <Navbar />
                        <DarkModeButton
                            state={this.state}
                            changeMode={this.changeMode}
                        />
                    </div>
                    <div className="pages">
                        <Routes>
                            <Route
                                index
                                element={
                                    <UserCard avatar={avatar} check={check} />
                                }
                            />
                            <Route
                                path=""
                                element={
                                    <UserCard avatar={avatar} check={check} />
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                            <Route
                                path="fe-techs"
                                element={
                                    <FETechs logos={[html, css, js, react]} />
                                }
                            />
                            <Route
                                path="subcribe-form"
                                element={<SubcribeForm />}
                            />
                            <Route
                                path="user-card"
                                element={
                                    <UserCard avatar={avatar} check={check} />
                                }
                            />
                            <Route
                                path="rgb-generator"
                                element={<RGBColorGenerator />}
                            />
                            <Route
                                path="number-generator"
                                element={<NumberGenerator quantity={32} />}
                            />
                            <Route
                                path="hex-generator"
                                element={<HexColorGenerator quantity={32} />}
                            />
                            <Route
                                path="world-population"
                                element={<WorldPopulation />}
                            />
                            <Route
                                path="random-countries"
                                element={<RandomCountries />}
                            />
                            <Route
                                // TODO: Add day time themes to the app
                                path="theme-backgrounds"
                                element={
                                    <ThemeBackgrounds data={this.seasons} />
                                }
                            />
                            <Route
                                path="event-handlers"
                                element={<EventHandlers />}
                            />
                            <Route
                                path="object-chasing"
                                element={<ObjectChasing />}
                            />
                            <Route
                                path="ultimate-validation"
                                element={
                                    <UltimateValidation
                                        validators={this.validators}
                                        messages={this.messages}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}
