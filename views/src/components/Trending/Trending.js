import React, { PureComponent } from 'react'
import styles from './Trending.module.css'
import PubSub from 'pubsub-js'
import ColorThief from 'colorthief/dist/color-thief.mjs'

class Trending extends PureComponent {
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
        const colorThief = new ColorThief()
        this.setState({ color: colorThief.getColor(img) })
    }

    componentDidMount() {
        PubSub.subscribe('pixels', (e, data) => {
            this.setState({ pixels: data.pixels })
        })

        // Modify Image-Path-Due to CORS Issues
        this.image = this.logo.current
        this.imgOnTime = this.logo.current

        this.image.addEventListener('load', () => this.getColor(this.image), false)

        this.interval = setInterval(() => {
            this.imgOnTime.addEventListener('load', () => {
                this.getColor(this.imgOnTime)
            }, false)
        }, 7000)
    }

    componentWillUnmount() {
        this.image.removeEventListener('load', () => this.getColor(this.image), false)

        if (this.interval) {
            this.imgOnTime.removeEventListener('load', () => {
                this.getColor(this.imgOnTime)
            }, false)
            clearInterval(this.interval)
        }

        PubSub.unsubscribe('pixels')
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
            // eslint-disable-next-line
            var toneText = 255
        }

        // Proxy for Getting Image Logo anti-CORS
        var googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
        var imageURL = this.state.trending.logo
        var imageSRC = googleProxyURL + encodeURIComponent(imageURL)

        return (
            <div className={styles.background} style={{
                    backgroundColor: `rgb(${r}, ${g}, ${b})`,
                    padding: `0 0 ${280 + this.state.pixels}px 0`
                }}>
                <div className="row">
                    <div className="col s12 m6">
                        <div className={styles.illustration}>
                            <img
                                src={imageSRC}
                                alt="currency-logo"
                                className={styles.imgLogo}
                                crossOrigin="Anonymous"
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
                                <h2 className={styles.marketingLabel}
                                    style={{color: `rgb(${toneText-r}, ${toneText-g}, ${toneText-b})`}}>
                                    {this.state.trending.name} <br/>
                                    is
                                    <span className={styles.textRage}> growing</span>
                                </h2>
                                <button className={`${styles.investBtn}`} style={{
                                        color: `rgb(${toneText-r}, ${toneText-g}, ${toneText-b})`,
                                        background: `rgb(${r}, ${g}, ${b})`,
                                        border: `4px solid rgb(${toneText-r}, ${toneText-g}, ${toneText-b})`
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
