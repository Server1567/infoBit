/*eslint no-eval: "off"*/
/*eslint-env es6*/

import React, { Component, Fragment } from 'react'
import styles from './About.module.css'
import PubSub from 'pubsub-js'
import axios from 'axios'

class About extends Component {
    // Assignment of properties and state's Component
    constructor(props) {
        super(props)

        this.state = {
            trending: props.currency,
            info: "",
            url: "",
            height: 458,
            pixels: 0
        }

        this.about = React.createRef()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.trending.price !== nextProps.currency.price) {
            return {
                trending: nextProps.currency
            }
        }
        return null
    }

    // Request to an API for to get Info about the Trending Cryptocurrency
    requestInfo = () => {
        var symbol = this.state.trending.symbol
        axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${symbol}`, {
            headers: {
                'X-CMC_PRO_API_KEY': 'dca0b296-abb2-482f-887e-2f0757bc3767',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(resp => {
                let info = eval(`resp.data.data.${symbol}.description`)
                let url = eval(`resp.data.data.${symbol}.urls.website[0]`)

                let arrayInfo = info.split('.')
                let index = info.split('.').indexOf(" More information can be found at https://www")
                this.setState({ info: arrayInfo.slice(0, index).join('.') + ".", url})
            })
            .catch(err => console.log("Something has get out wrong. " + err))
    }

    calcHeigh = () => {
        var heightNow = this.about.current.clientHeight
        var obj = {
            'height_initial': this.state.height,
            'heightnow': heightNow,
            'pixels': Math.abs(this.state.height - heightNow)
        }
        this.setState({ pixels: obj.pixels })
        PubSub.publish('pixels', obj)
        return obj.pixels
    }

    // Initialization for an timeout that update the info in 500ms and an interval each 7s
    componentDidMount() {
        this.timeout = setTimeout(() => this.requestInfo(), 500)
        this.interval = setInterval(() => this.requestInfo(), 7000)

        // Debo averiguar la manera poner el About alineado al centro del Trending

        // var about = this.about.current
        // var h = about.clientHeight
        // // Assignment for the Height Div
        // this.setState({ height: h })
        this.heightTimeout = setTimeout(() => this.calcHeigh(), 1000)

        window.addEventListener('resize', () => this.calcHeigh(), false)
    }

    // Destroyment timeouts and intervals for Performancing of the Component
    componentWillUnmount() {
        clearTimeout(this.timeout)
        clearTimeout(this.heightTimeout)
        clearInterval(this.interval)
        window.removeEventListener('resize', () => this.calcHeigh(), false)
    }

    render() {

        return (
            <div className={styles.about} ref={this.about} style={{top: `${-222 - (this.state.pixels)}px`}}>
                <div className="row">
                    <div className="col s12">
                        <center>
                            <span className={styles.ask}>What is {this.state.trending.name}?</span>
                            <br/><br/><br/>
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4">
                        <div className={styles.logo}>
                            <img src={this.state.trending.logo} className={`circle responsive-img ${styles.img}`} alt="Logo"/>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div className="col s12 l8">
                        {this.state.info === "" ? "Loading info..." :
                            <Fragment>
                                <p className={styles.info}>
                                    {this.state.info}
                                </p>
                                <span className={styles.url}>
                                    You can visit the Official Website at <a href={this.state.url} target='_blank' rel='noreferrer'>{this.state.url}</a>
                                </span>
                            </Fragment>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default About
