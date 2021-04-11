import React, { PureComponent } from 'react'
import Currency from '../Currency'
import Error from '../Error'
import axios from 'axios'
import PubSub from 'pubsub-js'

class Dashboard extends PureComponent {
    // Assignment of State's Component
    constructor(props) {
        super(props)

        this.state = {
            currencies: [],
            dataCurrencies: []
        }
    }

    // Request to an API for a TOP of the 6/10 cryptocurrencies with the greatest demand in the market in real time
    requestApi = () => {
        const api_key = '46236138e773f7585bc866aa0bf1cc1e3163a8157d2d3d40dc709343bcccc852'
        axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${api_key}`)
            .then(resp => this.setState({ currencies: resp.data.Data.slice(0, 6) }))
            .catch(err => console.log('Fallo al consumir la API. ' + err))
    }

    // Start the data request as soon as the Component is Mounted in the DOM
    componentDidMount() {
        this.requestApi()
        // Update the application in real time every 7 seconds
        this.interval = setInterval(() => this.requestApi(), 7000)

        // Preparing information to transmit it to the App Master
        PubSub.subscribe('currency-data-0', (e, data) => {
            this.setState({
                dataCurrencies: [
                    ...this.state.dataCurrencies,
                    data
                ]
            })
        })
        PubSub.subscribe('currency-data-1', (e, data1) => {
            this.setState({
                dataCurrencies: [
                    ...this.state.dataCurrencies,
                    data1
                ]
            })
        })
        PubSub.subscribe('currency-data-2', (e, data2) => {
            this.setState({
                dataCurrencies: [
                    ...this.state.dataCurrencies,
                    data2
                ]
            })
        })
        PubSub.subscribe('currency-data-3', (e, data3) => {
            this.setState({
                dataCurrencies: [
                    ...this.state.dataCurrencies,
                    data3
                ]
            })
        })
        PubSub.subscribe('currency-data-4', (e, data4) => {
            this.setState({
                dataCurrencies: [
                    ...this.state.dataCurrencies,
                    data4
                ]
            })
        })
        PubSub.subscribe('currency-data-5', (e, data5) => {
            this.setState({
                dataCurrencies: [
                    ...this.state.dataCurrencies,
                    data5
                ]
            })

            // Once the cryptocurrencies are packaged, the most trending one is raffled
            const { dataCurrencies } = this.state
            if (dataCurrencies.length === 6) {
                const currencyTrending = dataCurrencies.sort((a, b) => b.porcent - a.porcent)
                PubSub.publish('currency-trending', currencyTrending[0])
            }
        })

        this.intervalRemoval = setInterval(() => this.setState({
            dataCurrencies: []
        }), 7000)
    }

    // We clean the Interval when disassembling the Component
    componentWillUnmount() {
        clearInterval(this.interval)
        clearInterval(this.intervalRemoval)
        PubSub.clearAllSubscriptions()
    }

    render() {
        const { dataCurrencies } = this.state

        if (dataCurrencies.length === 6) {
            PubSub.publish('api-on', true)
        }

        return (
            <div className='container'>
                <div className="row">
                    {/* Iterate each cryptocurrency and return it as Component IF there is no Error */}
                    {this.state.currencies.length === 0 ?
                        <Error time={40000}
                                padding="115px 50px"
                                borderRadius="25px"
                                backgroundColor="#fff"
                                boxShadow="0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)"
                        /> :
                        this.state.currencies.map((currency, index) => (
                            <Currency key={currency.CoinInfo.Id}
                                data={currency}
                                price={currency.RAW.USD.PRICE}
                                index={index}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Dashboard
