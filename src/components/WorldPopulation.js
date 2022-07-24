// CSS
import '../styles/WorldPopulation.css'

// Data
import { tenHighestPopulation } from '../data/tenHighestPopulation'
const WORLD_POPULATION = tenHighestPopulation[0].population

// Functions
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

const visualize = (population, world) => {
    const proportion = population / world
    const width = proportion * 100 + '%'
    const style = { width }
    return style
}

const CountryVisualization = ({ data: { country, population } }) => {
    if (country === 'United States of America') country = 'USA'
    if (country === 'Russian Federation') country = 'Russia'
    return (
        <div key={country} className="world-country">
            <p className="world-name">{country}</p>
            <div className="world-bar">
                <div
                    style={visualize(population, WORLD_POPULATION)}
                    className="world-visualization"
                ></div>
            </div>
            <p className="world-population">{formatPopulation(population)}</p>
        </div>
    )
}

// Countries Visualization
const CountriesVisualization = ({ countries }) => {
    return countries.map((country) => <CountryVisualization data={country} />)
}

// World population
export default function WorldPopulation() {
    return (
        <div className="world-wrapper">
            <h1 className="world-project">30 Days of React</h1>
            <p className="world-title">World population</p>
            <p className="world-subtitle">Ten most populated countries</p>
            <div className="world-countries">
                <CountriesVisualization countries={tenHighestPopulation} />
            </div>
        </div>
    )
}
