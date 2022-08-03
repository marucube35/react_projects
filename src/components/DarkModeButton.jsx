// React
import { React, Component } from 'react'

class DarkModeButton extends Component {
    render() {
        const { mode, changeMode } = this.props

        return (
            <button onClick={changeMode} className="wrapper dark-mode-button" type="button">
                {mode} Mode
            </button>
        )
    }
}

export default DarkModeButton
