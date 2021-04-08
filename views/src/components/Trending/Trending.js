import React, { PureComponent } from 'react'
import styles from './Trending.module.css'
import { average } from 'color.js'
import PubSub from 'pubsub-js'
import axios from 'axios'
import imagen from './beneficios-Sandia.jpg'

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
        this.logo1 = React.createRef()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.trending.price !== nextProps.currency.price) {
            return {
                trending: nextProps.currency
            }
        }
        return null
    }

    // Get Image Independently to avoid problems with CORS
    getImage = () => {
        axios.get('http://farmaciasecadero.com/blog/wp-content/uploads/2018/05/beneficios-Sandia.jpg', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => console.log(res))
            .catch(e => console.error('It was an error getting the picture.'))
    }

    // Get Color From Image Logo
    getColor = (img) => {
        average(img)
            .then(color => this.setState({ color: color }))
    }

    componentDidMount() {
        PubSub.subscribe('pixels', (e, data) => {
            this.setState({ pixels: data.pixels })
        })

        // Modify Image-Path-Due to CORS Issues
        this.image = this.logo1.current
        this.imgOnTime = this.logo1.current

        this.getImage()

        this.image.addEventListener('load', () => this.getColor(this.image), false)

        this.interval = setInterval(() => {
            this.imgOnTime.addEventListener('load', () => {
                // If console.log() runs, the Component is done, then, remove that line.
                // Else, work on it.
                console.log('ON RUNNING 7 SECONDS')
                this.getColor(this.imgOnTime)
            }, false)
        }, 7000)
    }

    componentWillUnmount() {
        this.image.removeEventListener('load', () => this.getColor(this.image), false)

        if (this.interval) {
            this.imgOnTime.removeEventListener('load', () => {
                // If console.log() runs, the Component is done, then, remove that line.
                // Else, work on it.
                console.log('ON RUNNING 7 SECONDS')
                this.getColor(this.imgOnTime)
            }, false)
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
            // eslint-disable-next-line
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
                            <img
                                src={imagen}
                                alt="currency-logo"
                                className={styles.imgLogo}
                                ref={this.logo1} />
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
