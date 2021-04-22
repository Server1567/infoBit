import React, { Component, Fragment } from 'react'
import Question from '../Question'
import Trending from '../Trending'
import About from '../About'

class Main extends Component {
    // Assignment of Component's State
    constructor(props) {
        super(props)

        this.state = {
            switcher: false,
            trending: props.trending
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.switch) {
            return {
                switcher: true,
                trending: nextProps.trending
            }
        }
        return null
    }

    // Switcher for Component Rendering
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.trending.name !== nextProps.trending.name) {
            return true
        }

        if (this.props.trending.price !== nextProps.trending.price) {
            return true
        }

        return false
    }

    render() {
        if (this.state.switcher) {
            return (
                <Fragment>
                    <Question text="What to invest in now?" />
                    <Trending currency={this.state.trending} />
                    <About currency={this.state.trending} />
                </Fragment>
            )
        }

        return null
    }
}

export default Main
