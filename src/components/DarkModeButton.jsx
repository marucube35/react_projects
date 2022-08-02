// React
import React from 'react'

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
