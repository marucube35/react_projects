// React
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Data
import fe_techs from '../data/fe_techs'
import user_infos from '../data/user_infos'
import tenHighestPopulation from '../data/tenHighestPopulation'
import countries_data from '../data/countries_data'

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
import '../styles/main.scss'

// Components
import FrontEndTechs from './FETechs'
import SubcribeForm from './SubcribeForm'
import UserCard from './UserCard'
import RGBGenerator from './RGBGenerator'
import NumberGenerator from './NumberGenerator'
import HexColorGenerator from './HexColorGenerator'
import WorldPopulation from './WorldPopulation'
import RandomCountries from './RandomCountries'
import ThemeBackgrounds from './ThemeBackgrounds'
import EventHandlers from './EventHandlers'
import ObjectChasing from './ObjectChasing'
import UltimateValidation from './UltimateValidation'
import Navbar from './Navbar'

function NotFound() {
    return <div className="wrapper">The page you looking for is not found</div>
}

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
const validators = {
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
const messages = {
    firstName:
        "Name's length must be between 3 and 12 and only characters are accepted.",
    lastName:
        "Name's length must be between 3 and 12 and only characters are accepted.",
    email: 'Email is invalid, valid format: example@domain.com',
    tel: "Telephone's length must be between 6 and 12 and only numbers are accepted.",
    weight: 'Weight must be positive number.',
    country: 'You have not selected the country.'
}

class App extends Component {
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
            <Router>
                <div className={`app ${this.state.mode}-mode`}>
                    <div className="sidebar">
                        <Navbar
                            mode={this.state.mode}
                            changeMode={this.changeMode}
                        />
                    </div>

                    <div className="pages">
                        <Routes>
                            <Route
                                path="fe-techs"
                                element={<FrontEndTechs fe_techs={fe_techs} />}
                            />
                            <Route
                                path="subcribe-form"
                                element={<SubcribeForm />}
                            />
                            <Route
                                path="user-card"
                                element={<UserCard user_infos={user_infos} />}
                            />
                            <Route
                                path="rgb-generator"
                                element={<RGBGenerator quantity={5} />}
                            />
                            <Route
                                path="hex-generator"
                                element={<HexColorGenerator quantity={35} />}
                            />
                            <Route
                                path="number-generator"
                                element={<NumberGenerator quantity={36} />}
                            />
                            <Route
                                path="world-population"
                                element={
                                    <WorldPopulation
                                        countries={tenHighestPopulation}
                                    />
                                }
                            />
                            <Route
                                path="random-countries"
                                element={
                                    <RandomCountries
                                        countries={countries_data}
                                    />
                                }
                            />
                            <Route
                                // TODO: Add day time themes to the app
                                path="theme-backgrounds"
                                element={<ThemeBackgrounds data={seasons} />}
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
                                        validators={validators}
                                        messages={messages}
                                    />
                                }
                            />
                            <Route
                                index
                                element={<UserCard user_infos={user_infos} />}
                            />
                            <Route
                                path=""
                                element={<UserCard user_infos={user_infos} />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
