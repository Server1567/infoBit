import React, { PureComponent, Fragment } from 'react'
import styles from './About.module.css'
import PubSub from 'pubsub-js'
import Error from '../Error'
import axios from 'axios'

class About extends PureComponent {
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

        axios.post('/info-trending', { sym: symbol })
            .then(resp => {
                let info = resp.data.message
                let url = resp.data.url

                let arrayInfo = info.split('.')
                let index = info.split('.').indexOf(" More information can be found at https://www")

                this.setState({ info: arrayInfo.slice(0, index).join('.') + ".", url })
            }).catch(e => {
                // If API consumption fails, handle the error in a friendly way
                this.setState({ info: "" })
                console.error(e)
            })
    }

    calcHeigh = () => {
        var widthNow = this.about.current.clientWidth
        var heightNow = this.about.current.clientHeight
        var obj = {
            'height_initial': this.state.height,
            'heightnow': heightNow,
            'pixels': Math.abs(this.state.height - heightNow)
        }

        // Adjust pixels for Middle Screen
        if (widthNow < 973 && widthNow > 580) {
            obj.pixels = 100
        }
        // Adjust pixels for Mobile Screen
        else if (widthNow < 574 && widthNow > 331) {
            obj.pixels = 150
        }
        // Adjust pixels for Mobile Screen XS
        else if (widthNow < 331) {
            obj.pixels = 200
        }

        this.setState({ pixels: obj.pixels })
        PubSub.publish('pixels', obj)
        return obj.pixels
    }

    // Initialization for an timeout that update the info in 500ms and an interval each 7s
    componentDidMount() {
        this.timeout = setTimeout(() => this.requestInfo(), 500)
        this.interval = setInterval(() => this.requestInfo(), 7000)
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
            <div id='about' className={styles.about} ref={this.about} style={{marginTop: `${-222 - (this.state.pixels)}px`}}>
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
                        {this.state.info === "" ?
                            <Error time={20000}
                                    padding="0px"
                                    borderRadius="0px"
                                    backgroundColor="#fff0"
                                    boxShadow="none"
                            /> :
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
