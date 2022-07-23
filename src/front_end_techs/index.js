// Images
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'

// CSS
import './index.css'

// Front end technologies
const logos = [html, css, js, react]
export const Techs = () => (
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