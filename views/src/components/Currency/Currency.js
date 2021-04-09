import React, { Component } from 'react'
import styles from './Currency.module.css'
import M from 'materialize-css'
import Chart from 'chart.js'
import PubSub from 'pubsub-js'

class Currency extends Component {
    // Assignment of properties and state's Component
    constructor(props) {
        super(props)

        this.state = {
            currency: props.data,
            // The last position is the recent price entry
            trading: [
                props.price,
                props.price,
                props.price,
                props.price,
                props.price,
                props.price,
                props.price
            ]
        }
        // Refs for the DOM Objects
        this.graphic = React.createRef()
        this.porcent = React.createRef()
    }

    // Get the Price Now
    tooltip = () => M.Tooltip.init(this.porcent.current)

    // Trade de Currency Changes
    trade = () => {
        var price = this.state.currency.RAW.USD.PRICE
        var prices = this.state.trading
        prices.shift()
        prices.push(price)
        this.setState({ trading: prices })
    }

    // Graphic Display with Chart.js
    tradeGraphic = () => {
        const { current } = this.graphic
        const { trading } = this.state

        var trade0 = trading[0]
        var trade1 = trading[1]
        var trade2 = trading[2]
        var trade3 = trading[3]
        var trade4 = trading[4]
        var trade5 = trading[5]
        var trade6 = trading[6]

        const context = current.getContext('2d')
        new Chart(context, {
            type: 'line',
            data: {
                labels: ['6', '5', '4', '3', '2', '1', 'Price Now'],
                datasets: [{
                    data: [trade0, trade1, trade2, trade3, trade4, trade5, trade6],
                    backgroundColor: [
                        'rgba(141, 195, 81, 0.2)',
                        'rgba(141, 195, 81, 0.2)',
                        'rgba(141, 195, 81, 0.2)',
                        'rgba(141, 195, 81, 0.2)',
                        'rgba(141, 195, 81, 0.2)',
                        'rgba(141, 195, 81, 0.2)',
                        'rgba(141, 195, 81, 0.2)'
                    ],
                    borderColor: [
                        'rgba(141, 195, 81, 1)',
                        'rgba(141, 195, 81, 1)',
                        'rgba(141, 195, 81, 1)',
                        'rgba(141, 195, 81, 1)',
                        'rgba(141, 195, 81, 1)',
                        'rgba(141, 195, 81, 1)',
                        'rgba(141, 195, 81, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false
                    }],
                    xAxes: [{
                        display: false
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                events: ['']
            }
        })
    }

    // Send all Data to Dashboard
    publishCurrency = () => {
        const { currency } = this.state
        const calcPorcent = (currency.RAW.USD.PRICE / currency.RAW.USD.LOWDAY) * 100 - 100
        const porcent = this.roundOutPorcent(calcPorcent, 2)

        PubSub.publish(`currency-data-${this.props.index}`, {
            name: currency.CoinInfo.FullName,
            logo: `https://www.cryptocompare.com${currency.CoinInfo.ImageUrl}`,
            price: `$${new Intl.NumberFormat("en-US").format(currency.RAW.USD.PRICE)}`,
            porcent: porcent,
            symbol: currency.CoinInfo.Name
        })
    }

    // Get the Porcent
    roundOutPorcent = (num, digit) => {
        let base = Math.pow(10, digit);
        let integer = Math.round(num * base);
        return integer / base;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.currency.RAW.USD.PRICE !== nextProps.data.RAW.USD.PRICE) {
            return {
                currency: nextProps.data
            }
        }
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data.RAW.USD.PRICE !== this.props.data.RAW.USD.PRICE
    }

    // Initialization of Tasks
    componentDidMount() {
        this.trade()
        this.tradeGraphic()
        this.publishCurrency()
        window.addEventListener('DOMContentLoaded', this.tooltip(), false)
        this.currencyInterval = setInterval(() => this.publishCurrency(), 7000)
    }

    componentDidUpdate() {
        this.trade()
        this.tradeGraphic()
    }

    componentWillUnmount() {
        window.removeEventListener('DOMContentLoaded', this.tooltip(), false)
        clearInterval(this.currencyInterval)
    }

    render() {
        const { currency } = this.state
        const calcPorcent = (currency.RAW.USD.PRICE / currency.RAW.USD.LOWDAY) * 100 - 100
        const porcent = this.roundOutPorcent(calcPorcent, 2)

        return (
            <div className="col s12 m6 l4">
                <div className={`card ${styles.currency}`}>
                    <div className={`row ${styles.row}`}>
                        <div className="col s4">
                            <div className={`row ${styles.row}`}>
                                <div className='col s12'>
                                    <img
                                        src={`https://www.cryptocompare.com/${currency.CoinInfo.ImageUrl}`}
                                        alt="currency-logo"
                                        className={styles.logo} />
                                </div>
                                <div className='col s12'>
                                    <h6 className={styles.name}>{currency.CoinInfo.FullName}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col s8">
                            <div className={`row ${styles.row}`}>
                                <div className={`col s12 ${styles.graphic}`}>
                                    <canvas ref={this.graphic} className={styles.canvas}>
                                            <h5>${new Intl.NumberFormat("en-US").format(currency.RAW.USD.PRICE)}</h5>
                                    </canvas>
                                </div>
                                <div className='col s12'>
                                    <h6 className={styles.porcent}
                                        ref={this.porcent}
                                        data-position="left"
                                        data-tooltip={`Price Now: $${new Intl.NumberFormat("en-US").format(currency.RAW.USD.PRICE)}`}
                                        style={{
                                            color: Math.sign(porcent) === 1 ? '#169E4E' : '#EF0303'
                                        }}
                                    >
                                        {porcent}%
                                        <span className={styles.hour}> 24h</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Currency
