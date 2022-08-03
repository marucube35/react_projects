import { Link } from 'react-router-dom'
import { React, Component } from 'react'
import DarkModeButton from './DarkModeButton'
class Navbar extends Component {
    render() {
        return (
            <>
                <ul className="navigation">
                    <li>
                        <Link to="">Home</Link>
                    </li>
                    <li>
                        <Link to="fe-techs">Front End Techs</Link>
                    </li>
                    <li>
                        <Link to="subcribe-form">Subcribe Form</Link>
                    </li>
                    <li>
                        <Link to="user-card">User Card</Link>
                    </li>
                    <li>
                        <Link to="rgb-generator">RGB Color Generator</Link>
                    </li>
                    <li>
                        <Link to="number-generator">Number Generator</Link>
                    </li>
                    <li>
                        <Link to="hex-generator">
                            Hexadecimal Color Generator
                        </Link>
                    </li>
                    <li>
                        <Link to="world-population">World Population</Link>
                    </li>
                    <li>
                        <Link to="random-countries">Random Countries</Link>
                    </li>
                    <li>
                        <Link to="theme-backgrounds">Theme Backgrounds</Link>
                    </li>
                    <li>
                        <Link to="event-handlers">Event Handlers</Link>
                    </li>
                    <li>
                        <Link to="object-chasing">Object Chasing</Link>
                    </li>
                    <li>
                        <Link to="ultimate-validation">
                            Ultimate Validation
                        </Link>
                    </li>
                </ul>
                <DarkModeButton
                    mode={this.props.mode}
                    changeMode={this.props.changeMode}
                />
            </>
        )
    }
}

export default Navbar
