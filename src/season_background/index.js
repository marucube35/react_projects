// React
import React from 'react'

// CSS
import './index.css'

// Images
import spring from './images/spring.jpg'
import summer from './images/summer.jpg'
import autumn from './images/autumn.jpg'
import winter from './images/winter.jpg'

export class SeasonBackground extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSeason: 0
        }
        this.seasons = ['Spring', 'Summer', 'Autumn', 'Winter']
        this.seasonBackgrounds = [spring, summer, autumn, winter]
        this.seasonColors = ['#e55e75', '#fbf88d', '#b61a25', '#218ec9']
    }
    getNextSeason = () => {
        const { currentSeason } = this.state
        let nextSeason = (currentSeason + 1) % this.seasons.length
        return nextSeason
    }
    changeSeason = () => {
        this.setState({ currentSeason: this.getNextSeason() })
    }
    render() {
        const seasonStyle = {
            backgroundImage: `
            linear-gradient(to bottom, 
                rgba(0,0,0,0.1), 
                rgba(0,0,0,0.2)),
            url(${this.seasonBackgrounds[this.state.currentSeason]})`
        }

        const buttonStyle = {
            backgroundColor: this.seasonColors[this.state.currentSeason],
            color:
                this.seasons[this.state.currentSeason] === 'Summer'
                    ? '#000'
                    : '#fff'
        }

        return (
            <div style={seasonStyle} className="seasons-wrapper">
                <button
                    onClick={this.changeSeason}
                    style={buttonStyle}
                    type="button"
                    className="seasons-button"
                >
                    {this.seasons[this.state.currentSeason]}
                </button>
            </div>
        )
    }
}
