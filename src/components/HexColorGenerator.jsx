// Functions
import generateHexColor from '../utils/generateHexColor'

export default function HexColorGenerator({ quantity }) {
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
    return (
        <div className="hex-colors-wrapper">
            <h1 className="hex-colors-title">30 Days of React</h1>
            <p className="hex-colors-subtitle">Hexadecimal Color Generator</p>
            <div className="hex-colors">
                <HexColor quantity={quantity} />
            </div>
        </div>
    )
}
