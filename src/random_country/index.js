// React
import React from 'react'

// CSS
import './index.css'

// Data
import { countriesData as countries } from './countries_data.js'

// Functions
function capitalize(str) {
    return str.at(0).toUpperCase() + str.slice(1)
}

const insert = (str, index, value) => {
    return str.substring(0, index) + value + str.substring(index, str.length)
}

const formatPopulation = (population) => {
    let str = population.toString()

    for (let i = str.length - 3; i >= 0; i -= 3) {
        if (i !== 0) str = insert(str, i, ',')
    }

    return str
}

export class RandomCountries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCountry: 0
        }
        this.countries = countries
    }

    changeCountry = () => {
        const length = this.countries.length
        let randomIndex = Math.round(Math.random() * length) % length

        this.setState({ currentCountry: randomIndex })
    }

    renderInfos = (infos) => {
        const infosElement = []
        for (const info in infos) {
            if (info === 'population')
                infos[info] = formatPopulation(infos[info])
            if (info === 'languages') infos[info] = infos[info].join(', ')

            infosElement.push(
                <p key={info} className={`random-country-title`}>
                    {capitalize(info) + ': '}
                    <span className={`random-country-info`}>{infos[info]}</span>
                </p>
            )
        }
        return infosElement
    }

    render() {
        const { flag, name, ...rest } =
            this.countries[this.state.currentCountry]

        return (
            <div className="random-country-wrapper">
                <div className="random-country">
                    <div className="random-country-header">
                        <img
                            src={flag}
                            alt="Country Flag"
                            className="random-country-flag"
                        ></img>
                        <h1 className="random-country-name">{name}</h1>
                    </div>
                    <div className="random-country-body">
                        {this.renderInfos(rest)}
                    </div>
                </div>
                <button
                    onClick={this.changeCountry}
                    type="button"
                    className="random-country-button"
                >
                    Select Country
                </button>
            </div>
        )
    }
}
