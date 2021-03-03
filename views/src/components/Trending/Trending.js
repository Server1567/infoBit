import React, { Component } from 'react'
import styles from './Trending.module.css'
import { prominent } from 'color.js'
import PubSub from 'pubsub-js'

class Trending extends Component {
    // Assignment of Component's State and Refs
    constructor(props) {
        super(props)

        this.state = {
            trending: props.currency,
            color: [],
            pixels: 0
        }

        this.logo = React.createRef()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.trending.price !== nextProps.currency.price) {
            return {
                trending: nextProps.currency
            }
        }
        return null
    }

    // Get Color From Image Logo
    getColor = (img) => {
        prominent(img)
            .then(color => this.setState({ color: color[1] }))
    }

    componentDidMount() {
        PubSub.subscribe('pixels', (e, data) => {
            this.setState({ pixels: data.pixels })
        })
        this.timeout = setTimeout(() => {
            var image = this.logo.current
            image.addEventListener('load', () => this.getColor(image), false)
        }, 500)

        this.interval = setInterval(() => {
            var image = this.logo.current
            image.addEventListener('load', () => this.getColor(image), false)
        }, 7000)
    }

    componentWillUnmount() {
        var image = this.logo.current
        image.removeEventListener('load', () => this.getColor(image), false)

        if(this.timeout) {
            clearTimeout(this.timeout)
        }
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    render() {
        var r = 255 - this.state.color[0]
        var g = 255 - this.state.color[1]
        var b = 255 - this.state.color[2]
        var tone = 1 / 2 * (Math.max(r,g,b) + Math.min(r,g,b))

        // If the background has dark tone put white text, if it's light tone put them black
        if (tone > 127) {
            var toneText = 0
        }
        else {
            var toneText = 255
        }

        return (
            <div className={styles.background} style={{
                    backgroundColor: `rgb(${r}, ${g}, ${b})`,
                    padding: `0 0 ${280 + this.state.pixels}px 0`
                }}>
                <div className="row">
                    <div className="col s12 m6">
                        <div className={styles.illustration}>
                            <img
                                src={this.state.trending.logo}
                                alt="currency-logo"
                                className={styles.imgLogo}
                                ref={this.logo} />
                            <br/><br/>
                            <h3 className={styles.price} style={{color: `rgb(${toneText-r}, ${toneText-g}, ${toneText-b})`}}>
                                {this.state.trending.price}
                            </h3>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className={styles.marketing}>
                            <div style={{width: '211px'}}>
                                <h2 className={styles.marketingLabel} style={{color: `rgb(${toneText-r}, ${toneText-g}, ${toneText-b})`}}>
                                    {this.state.trending.name} <br/>
                                    is
                                    <span className={styles.textRage}> growing</span>
                                </h2>
                                <br/>
                                <button className={`${styles.investBtn}`} style={{
                                        color: `rgb(${tone-r}, ${tone-g}, ${tone-b})`,
                                        background: `rgb(${r}, ${g}, ${b})`,
                                        border: `4px solid rgb(${tone-r}, ${tone-g}, ${tone-b})`
                                    }}>
                                    invest now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trending
