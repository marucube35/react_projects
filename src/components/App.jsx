// React
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Data
import fe_techs from '../data/fe_techs'
import user_infos from '../data/user_infos'
import tenHighestPopulation from '../data/tenHighestPopulation'
import countries_data from '../data/countries_data'
import seasons from '../data/seasons'

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
                                element={<UltimateValidation />}
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
