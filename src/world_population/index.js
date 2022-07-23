// CSS
import './index.css'

// Data
import { tenHighestPopulation } from './data'

// Country Visualization
const CountryVisualization = ({ data: { country, population } }) => (
    <div className="world-country">
        <p className="world-name">{country}</p>
        <div className="world-visualization"></div>
        <p className="world-population">{population}</p>
    </div>
)

// Countries Visualization
const CountriesVisualization = ({ countries }) => {
    countries.map((country) => <CountryVisualization data={country} />)
}

// World population
export const WorldPopulation = () => (
    <div className="world-wrapper">
        <h1 className="world-project">30 Days of React</h1>
        <p className="world-title">World population</p>
        <p className="world-subtitle">Ten most populated countries</p>
        <div className="wordl-countries">
            <CountriesVisualization countries={tenHighestPopulation} />
        </div>
    </div>
)
