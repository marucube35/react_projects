import { Component } from 'react'
import generateRGBColor from '../utils/generateRGBColor'
import '../styles/rgb_generator.scss'

class RGBGenerator extends Component {
    generateColor(quantity) {
        const palette = []
        for (let i = 1; i <= quantity; i++) palette.push(generateRGBColor())
        return palette
    }

    render() {
        return (
            <div className="rgb-generator-wrapper">
                {this.generateColor(this.props.quantity).map((color) => (
                    <div style={{ backgroundColor: color }} key={color}>
                        {color}
                    </div>
                ))}
            </div>
        )
    }
}

export default RGBGenerator
