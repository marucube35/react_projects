import { React, Component } from 'react'

class Object extends Component {
    render() {
        const { x: left, y: top } = this.props.position
        const style = { left, top }
        return (
            <div
                style={style}
                className="object"
                onClick={this.props.handleClick}
            >
                Catch me if you can 🤪
            </div>
        )
    }
}

export default class ObjectChasing extends Component {
    state = {
        x: '',
        y: ''
    }
    handleClick = (e) => {
        console.log(e.target)
        let randomX = Math.round(11 + Math.random() * 78) + '%'
        let randomY = Math.round(11 + Math.random() * 78) + '%'
        this.setState({ x: randomX, y: randomY })
    }
    render() {
        return (
            <div className="chasing-wrapper">
                <Object
                    handleClick={this.handleClick}
                    position={{ x: this.state.x, y: this.state.y }}
                />
            </div>
        )
    }
}
