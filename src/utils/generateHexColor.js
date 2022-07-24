export default function generateHexColor() {
    let hexa = '#'
    const chars = ['a', 'b', 'c', 'd', 'e', 'f']

    for (let i = 0; i < 6; i++) {
        let type = Math.round(1 + Math.random() * 1)
        if (type === 1)
            hexa += Math.round(Math.random() * 9)
        else
            hexa += chars[Math.round(Math.random() * 5)]
    }

    return hexa
}