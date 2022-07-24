// React
import React from 'react'

// CSS
import './index.css'

// Images

export class TimeOfDayBackground extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: 0
        }
        this.time = ['Morning', 'Noon', 'Evening', 'Night']
        // this.timeBackgrounds = [spring, summer, autumn, winter]
        this.timeColors = ['#e55e75', '#fbf88d', '#b61a25', '#218ec9']
    }
    getNextTime = () => {
        const { currentTime } = this.state
        let nextSeason = (currentTime + 1) % this.seasons.length
        return nextSeason
    }
    changeTime = () => {
        this.setState({ currentTime: this.getNextTime() })
    }
    render() {
        const seasonStyle = {
            backgroundImage: `
            linear-gradient(to bottom, 
                rgba(0,0,0,0.1), 
                rgba(0,0,0,0.2)),
            url(${this.timeBackgrounds[this.state.currentTime]})`
        }

        const buttonStyle = {
            backgroundColor: this.timeColors[this.state.currentTime],
            color:
                this.seasons[this.state.currentTime] === 'Summer'
                    ? '#000'
                    : '#fff'
        }

        return (
            <div style={seasonStyle} className="seasons-wrapper">
                <button
                    onClick={this.changeTime}
                    style={buttonStyle}
                    type="button"
                    className="seasons-button"
                >
                    {this.time[this.state.currentTime]}
                </button>
            </div>
        )
    }
}
