import { Component } from 'react'
import capitalize from '../utils/capitalize'
import commify from '../utils/commify'
import '../styles/random_countries.scss'

class RandomCountries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCountry: 0
        }
        this.countries = props.countries
    }

    randomCountry = () => {
        const length = this.countries.length
        let randomIndex = Math.round(Math.random() * length) % length

        this.setState({ currentCountry: randomIndex })
    }
    renderInfos = (infos) => {
        const infosElement = []

        for (const info in infos) {
            if (info === 'population') infos[info] = commify(infos[info])
            if (info === 'languages') infos[info] = infos[info].join(', ')

            infosElement.push(
                <p key={info}>
                    {capitalize(info) + ': '}
                    <span>{infos[info]}</span>
                </p>
            )
        }

        return infosElement
    }

    render() {
        const { flag, name, ...infos } =
            this.countries[this.state.currentCountry]

        return (
            <div className="random-country-wrapper">
                <div className="random-country">
                    <div className="random-country-header">
                        <img src={flag} alt="Country Flag"></img>
                        <h1>{name}</h1>
                    </div>
                    <div className="random-country-body">
                        {this.renderInfos(infos)}
                    </div>
                </div>
                <button
                    onClick={this.randomCountry}
                    type="button"
                    className="button"
                >
                    Select Country
                </button>
            </div>
        )
    }
}

export default RandomCountries
