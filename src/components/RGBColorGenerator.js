// CSS
import '../styles/RGBColorGenerator.css'

// Functions
import generateRGBColor from '../utils/generateRGBColor'

const generateColor = (number) => {
    const palette = []
    for (let i = 1; i <= number; i++) palette.push(generateRGBColor())
    return palette
}

export default function RGBColorGenerator() {
    return (
        <div className="rgb-colors-wrapper">
            {generateColor(5).map((color) => (
                <div
                    style={{ backgroundColor: color }}
                    className="rgb-color"
                    key={color}
                >
                    {color}
                </div>
            ))}
        </div>
    )
}
