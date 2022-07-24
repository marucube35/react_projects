// React
import React from 'react'

// CSS
import '../styles/DarkModeButton.css'

export default class DarkModeButton extends React.Component {
    render() {
        const { mode } = this.props.state
        const changeMode = this.props.changeMode
        return (
            <div className={`dark-mode-wrapper ${mode}-mode`}>
                <div onClick={changeMode} className="dark-mode-button">
                    {mode} Mode
                </div>
            </div>
        )
    }
}
