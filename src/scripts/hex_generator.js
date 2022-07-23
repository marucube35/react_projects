// CSS
import '../styles/hex_generator.css'

// Functions
import { generateHexColor } from './utilities'

// Hexa color generatore
const generateColor = (quantity) => {
    const palette = []
    for (let i = 1; i <= quantity; i++) palette.push(generateHexColor())
    return palette
}

const HexColor = ({ quantity }) => {
    const palette = generateColor(quantity)
    return palette.map((color) => (
        <div
            style={{ backgroundColor: color }}
            className="hex-color"
            key={color}
        >
            {color}
        </div>
    ))
}

export const HexColorGenerator = ({ quantity }) => (
    <div className="hex-colors-wrapper">
        <h1 className="hex-colors-title">Hexadecimal Color Generator</h1>
        <p className="hex-colors-subtitle">Builed with React</p>
        <div className="hex-colors">
            <HexColor quantity={quantity} />
        </div>
    </div>
)
