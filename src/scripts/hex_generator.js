// CSS
import '../styles/hex_genarator.css'

// Functions
import { generateHexColor } from './utilities'

// Hexa color generatore
const generateColor = (number) => {
    const palette = []
    for (let i = 1; i <= number; i++) palette.push(generateHexColor())
    return palette
}
export const HexaColorGenerator = () => (
    <div className="hexa-generator-wrapper">
        {generateColor(5).map((color) => (
            <div style={{ backgroundColor: color }} className="color">
                {color}
            </div>
        ))}
    </div>
)
