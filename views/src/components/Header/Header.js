import React, { Component } from 'react'
import styles from './Header.module.css'
import logo from '../../res/infoBit-logo-black.png'
import M from 'materialize-css'
import 'material-icons'

class Header extends Component {
    // Assignment of Refs
    constructor(props) {
        super(props)

        this.mobile = React.createRef()
    }

    // Function Menu on Mobile Screen with Materialize
    sideNav = () => M.Sidenav.init(this.mobile.current, { edge: 'right' })

    // Run de Menu Function
    componentDidMount() {
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
                                <img src={logo} alt="infoBit" className={`left ${styles.logoImg}`} />
                            </div>
                            {/* Menu Button for Smarthphones Screen */}
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up right" style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                                <i className="material-icons" style={{color: 'black', fontSize: '30px'}}>menu</i>
                            </a>
                            {/* Navigation for Desktop */}
                            <ul className={`right hide-on-med-and-down ${styles.nav}`}>
                                <li><a href="sass.html">Cryptocurrencies</a></li>
                                <li><a href="badges.html">Trending</a></li>
                                <li><a href="collapsible.html">About</a></li>
                                <li><a href="mobile.html">Portals</a></li>
                            </ul>
                        </div>
                        {/* Navigation for Tablets */}
                        <div className="nav-content" style={{display: 'flex', height: '50%'}}>
                            <ul className={`hide-on-small-only hide-on-large-only ${styles.nav}`}>
                                <li><a href="sass.html">Cryptocurrencies</a></li>
                                <li><a href="badges.html">Trending</a></li>
                                <li><a href="collapsible.html">About</a></li>
                                <li><a href="mobile.html">Portals</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* Navigation for Mobile */}
                    <ul className={`sidenav ${styles.sidenav}`} id="mobile-demo" ref={this.mobile}>
                        <br/><br/><br/>
                        <li><a href="sass.html">Cryptocurrencies</a></li><br/>
                        <li><a href="badges.html">Trending</a></li><br/>
                        <li><a href="collapsible.html">About</a></li><br/>
                        <li><a href="mobile.html">Portals</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header
