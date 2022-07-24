// Images
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
// CSS
import '../styles/FETechs.css'

const logos = [html, css, js, react]

export default function FETechs() {
    return (
        <div className={`techs-wrapper`}>
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
}
