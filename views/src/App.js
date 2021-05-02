import React, { Component, Fragment } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Main from './components/Main'
import Footer from './components/Footer'
import PubSub from 'pubsub-js'

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
                <main style={{flex: '1 0 auto'}}>
                    <Dashboard />
                    <Main switch={this.state.apiOn} trending={this.state.currencyTrending} />
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default App
