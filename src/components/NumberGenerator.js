// CSS
import './index.css'

// Functions
import { isPrime } from '../utilities'

// Number generator
const generateNumber = (quantity) => {
    const numbers = []

    for (let i = 0; i <= quantity - 1; i++) numbers.push(i)
    return numbers
}

const generateColor = (number) => {
    let className = 'number'
    if (number % 2 === 0) className += ' number--green'
    else className += ' number--yellow'
    if (isPrime(number)) className += ' number--red'
    return className
}

const Number = ({ numbers }) => {
    return numbers.map((number) => (
        <div className={generateColor(number)} key={number}>
            {number}
        </div>
    ))
}

export default function NumberGenerator({ quantity }) {
    const numbers = generateNumber(quantity)
    return (
        <div className="numbers-wrapper">
            <h1 className="numbers-title">30 Days of React</h1>
            <p className="numbers-subtitle">Number Generator</p>
            <div className="numbers">
                <Number numbers={numbers} />
            </div>
        </div>
    )
}
