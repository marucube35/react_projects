import React, { Component } from 'react'
export default class EventHandlers extends Component {
    state = {
        message: 'Mouse handler',
        dropMessage: ''
    }
    // key down -> key up
    // until key is released
    handleKeyDown = (e) => {
        console.log('Key down:', e.key)
    }
    // when key is released
    handleKeyUp = (e) => {
        console.log('Key up:', e.key)
    }
    // when input is inserted
    handleInput = (e) => {
        console.log('Input: ', e.target.value)
    }
    // when input is blured out
    handleBlur = () => {
        console.log('You are bluring out')
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form is submitted')
    }
    // when mouse is moving
    handleMove = (e) => {
        console.log(`Cursor is at (${e.pageX},${e.pageY})`)
    }
    // when mouse is inside
    handleMouseEnter = () => {
        this.setState({ message: 'Entering' })
    }
    // when mouse is left
    handleMouseLeave = () => {
        this.setState({ message: 'Leaving' })
    }
    // when click
    handleClick = (e) => {
        this.setState({ message: 'Click' })
    }
    // when double click
    handleDbClick = () => {
        this.setState({ message: 'Double Click' })
    }
    // when text is copied
    handleCopy = () => {
        console.log('Text is copied')
    }
    // when text is cut
    handleCut = () => {
        console.log('Text is cut')
    }
    // when text is dragged
    handleDrag = () => {
        console.log('Text is dragged')
    }
    // when option is changed
    handleChange = (e) => {
        console.log('You choose', e.target.value)
    }

    render() {
        return (
            <div className="handlers-wrapper">
                <h1 className="handlers-title">Event Handlers</h1>
                <p className="handlers-subtitle">View output in console</p>

                <form className="form-handler" onSubmit={this.handleSubmit}>
                    <input
                        className="input-handler"
                        type="text"
                        onKeyDown={this.handleKeyDown}
                        onKeyUp={this.handleKeyUp}
                        onInput={this.handleInput}
                        onBlur={this.handleBlur}
                        placeholder="Key handler"
                    />
                    <input className="button-handler" type="submit"></input>
                </form>
                <div
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={this.handleClick}
                    onDoubleClick={this.handleDbClick}
                    onMouseMove={this.handleMove}
                    className="mouse-handler"
                >
                    {this.state.message}
                </div>
                <p
                    className="text-handler"
                    onCopy={this.handleCopy}
                    onCut={this.handleCut}
                    onDrag={this.handleDrag}
                >
                    Text handler
                </p>
                <select
                    title="waifu"
                    className="select-handler"
                    onChange={this.handleChange}
                >
                    <option>Select handler</option>
                    <option>Hatsune Miku</option>
                    <option>Zero Two</option>
                    <option>Sona</option>
                </select>
            </div>
        )
    }
}
