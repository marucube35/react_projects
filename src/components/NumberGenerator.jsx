import { Component } from 'react'
import isPrime from '../utils/isPrime'
import '../styles/number_generator.scss'

class NumberGenerator extends Component {
    generateNumber(quantity) {
        const numbers = []

        for (let i = 0; i <= quantity - 1; i++) numbers.push(i)
        return numbers
    }

    generateColor(number) {
        let className = ''

        if (number % 2 === 0) className += ' green'
        else className += ' yellow'
        if (isPrime(number)) className += ' red'

        return className
    }

    render() {
        return (
            <div className="numbers-wrapper">
                <div className='numbers'>
                    {this.generateNumber(this.props.quantity).map((number) => (
                        <div
                            className={this.generateColor(number)}
                            key={number}
                        >
                            {number}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default NumberGenerator
