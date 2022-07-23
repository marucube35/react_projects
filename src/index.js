// React
import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'
import './front_end.css'
import './subcribe_form.css'
import './user_card.css'
import './hexa_genarator.css'

// Images
import html from '../public/html.png'
import css from '../public/css.png'
import js from '../public/js.png'
import react from '../public/react.png'
import avatar from '../public/avatar.png'
import check from '../public/check.png'

// Functions
import { getCurrentDateTime, generateHexColor } from './utilities.js'

// Front end technologies
const logos = [html, css, js, react]
const Techs = () => (
    <div className="techs-wrapper">
        <h1 className="techs-title">Front End Technologies</h1>
        <div className="techs-logos">
            {logos.map((logo) => (
                <img
                    className="techs-logo"
                    src={logo}
                    alt="Tech Logo"
                    key={logo}
                ></img>
            ))}
        </div>
    </div>
)

// Subcribe form
const inputs = ['First name', 'Last name', 'Email']
const Subcribe = () => (
    <div className="subcribe-wrapper">
        <form className="subcribe-form">
            <h1 class="subcribe-title">Subcribe</h1>
            <p className="subcribe-message">
                Sign up with your email address to receive news and updates.
            </p>
            <div className="subcribe-inputs">
                {inputs.map((input) => (
                    <input
                        type={input === 'Email' ? 'email' : 'text'}
                        placeholder={input}
                        className="subcribe-input"
                    ></input>
                ))}
            </div>
            <button type="submit" className="subcribe-button">
                Subcribe
            </button>
        </form>
    </div>
)

// User card
const user = {
    avatar,
    check,
    name: 'Lê Minh Quân',
    title: 'Student',
    country: 'Việt Nam',
    skills: [
        'HTML',
        'CSS',
        'JS',
        'React',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'MySQL',
        'Git',
        'Gulp',
        'Webpack',
        'Babel',
        'Bower',
        'NPM',
        'Sass',
        'Bootstrap',
        'Materialize',
        'Sketch',
        'Photoshop',
        'Illustrator',
        'After Effects',
        'Premiere Pro',
        'Lightroom',
        'XD',
        'InDesign',
        'Dreamweaver',
        'Flash'
    ],
    timestamp: getCurrentDateTime()
}
const UserCard = () => (
    <div className="user-wrapper">
        <div className="user-card">
            <img className="user-avatar" src={user.avatar} alt="Avatar"></img>
            <h3 className="user-name">
                {user.name}
                <i class="user-check-icon fas fa-check"></i>
            </h3>
            <p className="user-title-country">
                {user.title + ', ' + user.country}
            </p>
        </div>

        <h3 className="user-skills-title">Skills</h3>
        <div className="user-skills">
            {user.skills.map((skill) => (
                <span className="user-skill" key={skill}>
                    {skill}
                </span>
            ))}
        </div>
        <p className="user-time-stamp">
            <i className="user-time-icon fas fa-clock-rotate-left"></i>
            Joined on {user.timestamp}
        </p>
    </div>
)

const generateColor = (number) => {
    const palette = []
    for (let i = 1; i <= number; i++) palette.push(generateHexColor())
    return palette
}
const HexaColorGenerator = () => (
    <div className="hexa-generator">
        {generateColor(5).map((color) => (
            <div style={{ backgroundColor: color }} className="color">
                {color}
            </div>
        ))}
    </div>
)

const App = () => (
    <div className="wrapper">
        <Techs />
        <Subcribe />
        <UserCard />
        <HexaColorGenerator />
    </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
