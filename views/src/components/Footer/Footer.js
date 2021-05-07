import React, { Component } from 'react'
import styles from './Footer.module.css'
import infoBitLogo from '../../res/infoBit-logo-white.png'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer" style={{backgroundColor: '#19265A'}}>
                <div className="container">
                    <div className="row">
                        <div className={`col s12 m6 l6 ${styles.center}`}>
                            <img className={styles.logo} src={infoBitLogo} alt="infobit" />
                            <p className="grey-text text-lighten-4">Learn what happens with Cryptocurrencies!</p>
                        </div>
                        <div className={`col s12 m6 l4 offset-l2 ${styles.center} ${styles.top}`}>
                            <h5 className="white-text">A project by
                                <span className={styles.name}> Server1567</span>
                            </h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://server1567.github.io" target='_blank' rel='noreferrer'>Website</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://github.com/Server1567" target='_blank' rel='noreferrer'>GitHub</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/juniorsver" target='_blank' rel='noreferrer'>LinkedIn</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://twitter.com/juniorsverr" target='_blank' rel='noreferrer'>Twitter</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://www.patreon.com/infobit" target='_blank' rel='noreferrer'>Patreon</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={`footer-copyright ${styles.darken}`}>
                    <div className="container">
                        infoBit © 2021. All right reserved.
                        <a className={`grey-text text-lighten-4 right ${styles.left}`}
                            href="https://github.com/Server1567/infoBit/blob/master/LICENSE"
                            target='_blank'
                            rel='noreferrer'>
                            Terms and License
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
