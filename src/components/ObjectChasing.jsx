import { Component } from 'react'
import '../styles/object_chasing.scss'
class Object extends Component {
    render() {
        const { left, top, transform } = this.props.position

        return (
            <div
                style={{ left, top, transform }}
                className="object"
                onClick={this.props.handleClick}
            >
                Catch me if you can 🤪
            </div>
        )
    }
}

class ObjectChasing extends Component {
    state = {
        left: '',
        top: ''
    }

    handleClick = (e) => {
        console.log(e.target)
        let randomX = `${Math.round(Math.random() * 100)}%`
        let randomY = `${Math.round(Math.random() * 100)}%`
        let transform = `translate(-${randomX}, -${randomY})`

        this.setState({ left: randomX, top: randomY, transform })
    }

    render() {
        return (
            <div className="chasing-wrapper">
                <Object handleClick={this.handleClick} position={this.state} />
            </div>
        )
    }
}

export default ObjectChasing
