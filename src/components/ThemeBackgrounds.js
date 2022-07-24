// React
import React from 'react'

export default class ThemeBackgrounds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTheme: 0,
            loaded: false
        }

        setTimeout(this.loadTheme, 5000)

        const {
            data: { themes, backgrounds, buttonColors, colors }
        } = props

        this.themes = themes
        this.backgrounds = backgrounds
        this.buttonColors = buttonColors
        this.colors = colors
    }
    loadTheme = () => {
        this.setState({ loaded: true })
    }
    getNextTheme = () => {
        const { currentTheme } = this.state
        let nextTheme = (currentTheme + 1) % this.themes.length
        return nextTheme
    }
    changeTheme = () => {
        this.setState({ currentTheme: this.getNextTheme() })
    }
    render() {
        const {
            state: { currentTheme },
            themes,
            backgrounds,
            buttonColors,
            colors
        } = this

        const backGroundStyle = {
            backgroundImage: `
            linear-gradient(to bottom, 
                rgba(0,0,0,0.1), 
                rgba(0,0,0,0.2)),
            url(${backgrounds[currentTheme]})`
        }

        const buttonStyle = {
            backgroundColor: buttonColors[currentTheme],
            color: colors[currentTheme]
        }

        if (this.state.loaded)
            return (
                <div style={backGroundStyle} className="seasons-wrapper">
                    <button
                        onClick={this.changeTheme}
                        style={buttonStyle}
                        type="button"
                        className="seasons-button"
                    >
                        {themes[currentTheme]}
                    </button>
                </div>
            )
        else return <div className="seasons-wrapper skeleton-screen"></div>
    }
}
