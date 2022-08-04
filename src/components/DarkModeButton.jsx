import { Component } from 'react'
import '../styles/dark_mode_button.scss'

class DarkModeButton extends Component {
    render() {
        const { mode, changeMode } = this.props

        return (
            <button
                onClick={changeMode}
                className="dark-mode-wrapper"
                type="button"
            >
                {mode} Mode
            </button>
        )
    }
}

export default DarkModeButton
