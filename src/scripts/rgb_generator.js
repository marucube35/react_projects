// CSS
import '../styles/rgb_generator.css'

// Functions
import { generateRGBColor } from './utilities'

// Hexa color generatore
const generateColor = (number) => {
    const palette = []
    for (let i = 1; i <= number; i++) palette.push(generateRGBColor())
    return palette
}
export const RGBColorGenerator = () => (
    <div className="rgb-generator-wrapper">
        {generateColor(5).map((color) => (
            <div style={{ backgroundColor: color }} className="color" key={color}>
                {color}
            </div>
        ))}
    </div>
)
