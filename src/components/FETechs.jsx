import { Component } from 'react'
import '../styles/fe_techs.scss'

class FrontEndTechs extends Component {
    render() {
        const logos = this.props.fe_techs

        return (
            <div className="techs-wrapper">
                <h1>Front End Technologies</h1>
                <div>
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Front-end Techology"
                        ></img>
                    ))}
                </div>
            </div>
        )
    }
}
export default FrontEndTechs
