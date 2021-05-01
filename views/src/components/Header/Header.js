import React, { Component } from 'react'
import { scrollTo } from 'scroll-js'
import styles from './Header.module.css'
import logo from '../../res/infoBit-logo-black.png'
import M from 'materialize-css'
import 'material-icons'

class Header extends Component {
    // Assignment of State and Refs
    constructor(props) {
        super(props)

        this.state = {
            layout: 100
        }

        this.mobile = React.createRef()
    }

    // Link to Cryptocurrencies Component
    cryptocurrenciesLink = (isMobile) => {
        scrollTo(window, {top: 0}).then(() => {
            return null
        })

        // If is Mobile Screen Close de Sidenav when click on its items
        if (isMobile) {
            let instance = M.Sidenav.getInstance(this.mobile.current)
            instance.close()
        }
    }
    // Link to Trending Component
    trendingLink = (isMobile) => {
        let trendingOffsetTop = document.getElementById('trending').offsetTop
        let offset = trendingOffsetTop - this.state.layout

        scrollTo(window, {top: offset}).then(() => {
            return null
        })

        // If is Mobile Screen Close de Sidenav when click on its items
        if (isMobile) {
            let instance = M.Sidenav.getInstance(this.mobile.current)
            instance.close()
        }
    }
    // Link to About Component
    aboutLink = (isMobile) => {
        let aboutOffsetTop = document.getElementById('about').offsetTop
        let offset = aboutOffsetTop - this.state.layout

        scrollTo(window, {top: (offset - 25)}).then(() => {
            return null
        })

        // If is Mobile Screen Close de Sidenav when click on its items
        if (isMobile) {
            let instance = M.Sidenav.getInstance(this.mobile.current)
            instance.close()
        }
    }
    // Link to Portals Component
    portalsLink = (isMobile) => {
        let portalsOffsetTop = document.getElementById('portals').offsetTop
        let offset = portalsOffsetTop - this.state.layout

        scrollTo(window, {top: offset}).then(() => {
            return null
        })

        // If is Mobile Screen Close de Sidenav when click on its items
        if (isMobile) {
            let instance = M.Sidenav.getInstance(this.mobile.current)
            instance.close()
        }
    }


    // Arrow Function Menu on Mobile Screen with Materialize
    sideNav = () => M.Sidenav.init(this.mobile.current, { edge: 'right' })

    // Run de Menu Function
    componentDidMount() {
        if (window.innerWidth > 600 && window.innerWidth < 993) {
            this.setState({ layout: 200 })
        }
        window.addEventListener('DOMContentLoaded', this.sideNav, false)
    }

    // Destroy de Menu Function
    componentWillUnmount() {
        window.removeEventListener('DOMContentLoaded', this.sideNav, false)
    }

    render() {
        return (
            <header className={styles.header}>
                <div className="navbar-fixed" style={{height: '100%'}}>
                    <nav className={styles.navBar}>
                        <div className={`nav-wrapper ${styles.navWrapper}`}>
                            {/* InfoBit Logo */}
                            <div className={`brand-logo ${styles.divLogo}`}>
                                <a href="http://infobit.herokuapp.com">
                                    <img src={logo} alt="infoBit" className={`left ${styles.logoImg}`} />
                                </a>
                            </div>
                            {/* Menu Button for Smarthphones Screen */}
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up right" style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                                <i className="material-icons" style={{color: 'black', fontSize: '30px'}}>menu</i>
                            </a>
                            {/* Navigation for Desktop */}
                            <ul className={`right hide-on-med-and-down ${styles.nav}`}>
                                <li><a href="#!" onClick={() => this.cryptocurrenciesLink(false)}>Cryptocurrencies</a></li>
                                <li><a href="#!" onClick={() => this.trendingLink(false)}>Trending</a></li>
                                <li><a href="#!" onClick={() => this.aboutLink(false)}>About</a></li>
                                <li><a href="#!" onClick={() => this.portalsLink(false)}>Portals</a></li>
                            </ul>
                        </div>
                        {/* Navigation for Tablets */}
                        <div className="nav-content" style={{display: 'flex', height: '50%'}}>
                            <ul className={`hide-on-small-only hide-on-large-only ${styles.nav}`}>
                                <li><a href="#!" onClick={() => this.cryptocurrenciesLink(false)}>Cryptocurrencies</a></li>
                                <li><a href="#!" onClick={() => this.trendingLink(false)}>Trending</a></li>
                                <li><a href="#!" onClick={() => this.aboutLink(false)}>About</a></li>
                                <li><a href="#!" onClick={() => this.portalsLink(false)}>Portals</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* Navigation for Mobile */}
                    <ul className={`sidenav ${styles.sidenav}`} id="mobile-demo" ref={this.mobile}>
                        <br/><br/><br/>
                        <li><a href="#!" onClick={() => this.cryptocurrenciesLink(true)}>Cryptocurrencies</a></li><br/>
                        <li><a href="#!" onClick={() => this.trendingLink(true)}>Trending</a></li><br/>
                        <li><a href="#!" onClick={() => this.aboutLink(true)}>About</a></li><br/>
                        <li><a href="#!" onClick={() => this.portalsLink(true)}>Portals</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header
