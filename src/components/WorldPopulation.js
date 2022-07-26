// React
import React from 'react'

// Data
import { tenHighestPopulation } from '../data/tenHighestPopulation'

// Country Visualization
const CountryVisualization = ({ data: { name, population } }) => {
    const WORLD_POPULATION = tenHighestPopulation[0].population
    const insert = (str, index, value) => {
        return (
            str.substring(0, index) + value + str.substring(index, str.length)
        )
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

    if (name === 'United States of America') name = 'USA'
    if (name === 'Russian Federation') name = 'Russia'

    return (
        <div className="world-country">
            <p className="world-name">{name}</p>
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
    return countries.map((country) => (
        <CountryVisualization key={country.name} data={country} />
    ))
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
