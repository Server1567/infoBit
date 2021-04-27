import React, { Component, Fragment } from 'react'
import PubSub from 'pubsub-js'
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Main from './components/Main'

class App extends Component {
    // Assignment of Component's State
    constructor() {
        super()

        this.state = {
            currencyTrending: {},
            apiOn: false
        }
    }

    // Initialize eavesdropping on information transmissions from other components
    componentDidMount() {
        PubSub.subscribe('currency-trending', (e, currency) => {
            this.setState({
                currencyTrending: currency
            })
        })

        PubSub.subscribe('api-on', (e, pass) => {
            this.setState({
                apiOn: pass
            })
        })
    }

    // Cleaning for performance
    componentWillUnmount() {
        PubSub.unsubscribe('currency-trending')
        PubSub.unsubscribe('api-on')
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Dashboard />
                <Main switch={this.state.apiOn} trending={this.state.currencyTrending} />
            </Fragment>
        )
    }
}

export default App
