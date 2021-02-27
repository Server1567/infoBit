import React, { Component } from 'react'
import styles from './Trending.module.css'
import ColorThief from 'colorthief/dist/color-thief.min.js'

class Trending extends Component {
    // Assignment of Component's State and Refs
    constructor(props) {
        super(props)

        this.state = {
            trending: props.currency
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

    getColorFromLogo = (img) => {
        const colorThief = new ColorThief()
        document.addEventListener('load', function() {
            return colorThief.getColor(img)
        })
    }

    // componentDidMount() {
    //     console.log(this.getColorFromLogo(this.logo.current))
    // }

    // invertColor = () => {}

    render() {
        return (
            <div className={styles.background}>
                <div className="row">
                    <div className="col s12 m6">
                        <div className={styles.illustration}>
                            <img
                                src={this.state.trending.logo}
                                alt="currency-logo"
                                className={styles.imgLogo}
                                ref={this.logo} />
                            <br/><br/>
                            <h3 className={styles.price}>{this.state.trending.price}</h3>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className={styles.marketing}>
                            <div style={{width: '211px'}}>
                                <h2 className={styles.marketingLabel}>
                                    {this.state.trending.name} <br/>
                                    is
                                    <span className={styles.textRage}> growing</span>
                                </h2>
                                <br/>
                                <button className={`${styles.investBtn}`}>
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
