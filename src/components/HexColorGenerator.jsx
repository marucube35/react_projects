import { Component } from 'react'
import generateHexColor from '../utils/generateHexColor'
import '../styles/hex_color_generator.scss'

class HexColorGenerator extends Component {
    generateColor(quantity) {
        const palette = []
        for (let i = 1; i <= quantity; i++) palette.push(generateHexColor())
        return palette
    }

    render() {
        return (
            <div className="hex-generator-wrapper">
                {this.generateColor(this.props.quantity).map((color) => (
                    <div style={{ backgroundColor: color }} key={color}>
                        {color}
                    </div>
                ))}
            </div>
        )
    }
}

export default HexColorGenerator
