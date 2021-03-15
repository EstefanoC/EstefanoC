import React, { Component } from 'react'

// Typed
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';


class TypedReact extends Component {
    constructor (props) {
        super(props)

        this.state = { cont:0 }

        this.stop = this.stop.bind(this)
        this.start = this.start.bind(this)
    }

    stop() {
        this.typed.stop()
    }

    start() {
        this.typed.start()
    }

    render() {

        if (this.props.start) {
            this.stop()
        } else if (this.props.stop) {
            this.start()
        }

        if (this.props.WithoutStop) {
            return (
                <Typed
                typedRef={(typed) => { this.typed = typed; }}
                loop
                typeSpeed={this.props.typeSpeed}
                backSpeed={this.props.backSpeed}
                strings={this.props.typedString}
                smartBackspace
                shuffle={false}
                backDelay={this.props.backDelay}
                fadeOut={false}
                fadeOutDelay={2}
                loopCount={0}
                showCursor
                cursorChar={this.props.cursor}
                />
            )
        } else {
            return (
                <Typed
                typedRef={(typed) => { this.typed = typed; }}
                loop
                stopped
                typeSpeed={this.props.typeSpeed}
                backSpeed={this.props.backSpeed}
                strings={this.props.typedString}
                smartBackspace
                shuffle={false}
                backDelay={this.props.backDelay}
                fadeOut={false}
                fadeOutDelay={2}
                loopCount={0}
                showCursor
                cursorChar={this.props.cursor}
                />
            )
        }
    }
}


export default TypedReact