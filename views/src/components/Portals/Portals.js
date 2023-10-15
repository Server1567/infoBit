import React, { Component } from 'react'
import styles from './Portals.module.css'
import BinanceLogo from '../../res/BinanceLogo.svg'
import CoinbaseLogo from '../../res/CoinbaseLogo.svg'
import KrakenLogo from '../../res/KrakenLogo.svg'

class Portals extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <center>
                            <a href="https://ouo.io/dJAzMHx" target='_blank' rel='noreferrer'>
                                <img className={`tooltipped ${styles.logo}`}
                                    src={BinanceLogo}
                                    alt="binance" />
                            </a>
                        </center>
                    </div>
                    <div className='col s12 m6'>
                        <center>
                            <a href="https://ouo.io/N72pfA" target='_blank' rel='noreferrer'>
                                <img className={styles.logo}
                                    src={CoinbaseLogo}
                                    alt="coinbase" />
                            </a>
                        </center>
                    </div>
                    <div className='col s12'>
                        <center>
                            <a href="https://ouo.io/cucVNq" target='_blank' rel='noreferrer'>
                                <img className={styles.logo}
                                    src={KrakenLogo}
                                    alt="kraken" />
                            </a>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portals
