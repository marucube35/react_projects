import { Component } from 'react'
import commify from '../utils/commify'
import '../styles/world_population.scss'
class CountriesVisualization extends Component {
    constructor(props) {
        super(props)

        this.countries = props.countries
    }

    renameCountry(name) {
        if (name === 'United States of America') return 'USA'
        if (name === 'Russian Federation') return 'Russia'
        else return name
    }

    visualize(population, world) {
        const proportion = population / world
        const width = Math.round(proportion * 100) + '%'
        const style = { width }
        return style
    }

    render() {
        const worldPopulation = this.countries[0].population

        return this.countries.map(({ name, population }, index) => (
            <div key={index} className="country">
                <p>{this.renameCountry(name)}</p>
                <div>
                    <div
                        style={this.visualize(population, worldPopulation)}
                    ></div>
                </div>
                <span>{commify(population)}</span>
            </div>
        ))
    }
}

class WorldPopulation extends Component {
    render() {
        return (
            <div className="world-population-wrapper">
                <h1>Ten most populated countries</h1>
                <div className="countries">
                    <CountriesVisualization countries={this.props.countries} />
                </div>
            </div>
        )
    }
}

export default WorldPopulation
