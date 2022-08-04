import { Component } from 'react'
import '../styles/theme_background.scss'
import '../animations/loading.scss'

export default class ThemeBackgrounds extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTheme: 0,
            loaded: false
        }

        setTimeout(this.loadTheme, 1000)
    }

    static getDerivedStateFromProps({
        data: { themes, backgrounds, buttonColors, colors }
    }) {
        return { themes, backgrounds, buttonColors, colors }
    }

    loadTheme = () => {
        this.setState({ loaded: true })
    }
    changeTheme = () => {
        const { currentTheme, themes } = this.state
        this.setState({ currentTheme: (currentTheme + 1) % themes.length })
    }
    generateBackgroundStyle() {
        const { currentTheme, backgrounds } = this.state

        const backGroundStyle = {
            backgroundImage: `
            linear-gradient(to bottom, 
                rgba(0,0,0,0.1), 
                rgba(0,0,0,0.2)),
            url(${backgrounds[currentTheme]})`
        }

        return backGroundStyle
    }
    generateButtonStyle() {
        const { currentTheme, buttonColors, colors } = this.state

        const buttonStyle = {
            backgroundColor: buttonColors[currentTheme],
            color: colors[currentTheme]
        }

        return buttonStyle
    }

    render() {
        const { currentTheme, themes } = this.state

        if (this.state.loaded)
            return (
                <div
                    style={this.generateBackgroundStyle()}
                    className="seasons-wrapper"
                >
                    <button
                        onClick={this.changeTheme}
                        style={this.generateButtonStyle()}
                        type="button"
                    >
                        {themes[currentTheme]}
                    </button>
                </div>
            )
        else return <div className="seasons-wrapper loading"></div>
    }
}
