export default function generateRGBColor(opacity = 1) {
    let chars = 'rgb('
    for (let i = 0; i < 3; i++) {
        chars += Math.round(1 + Math.random() * 255) + (i === 2 ? '' : ',')
    }
    return chars + `, ${opacity})`
}
