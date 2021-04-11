import React, { Component } from 'react'

class Error extends Component {
    // Assignment of State's Component
    constructor(props) {
        super(props)

        this.state = {
            timeOver: false,
            timeOverSec: props.time,
            // Component Customization States
            padding: props.padding,
            borderRadius: props.borderRadius,
            backgroundColor: props.backgroundColor,
            boxShadow: props.boxShadow
        }
    }

    // Estimated time to finish uploading and display Fatal Error
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ timeOver: true })
        }, this.state.timeOverSec)
    }

    // Cleaning RAM
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    // Component Rendering Error in case of any failure in the API consumption
    render() {
        if (this.state.timeOver) {
            return (
                <div className="col s12">
                    <div className="card"
                        style={{
                            padding: this.state.padding,
                            borderRadius: this.state.borderRadius,
                            backgroundColor: this.state.backgroundColor,
                            boxShadow: this.state.boxShadow
                        }}>
                        <center>
                            <h1 style={{color: '#db4437'}}>Error 404 Not Found</h1>
                            <h4 style={{color: 'darkgray'}}>
                                The API has expired,
                                <a href='https://github.com/Server1567/infoBit/issues' target='_blank' rel='noreferrer'>contact</a>
                                 with us to resolve it.
                            </h4>
                            <h5 style={{color: 'darkgray'}}>You can reload the page for try solve it.</h5>
                        </center>
                    </div>
                </div>
            )
        }

        return (
            <div className="col s12">
                <div className="card"
                    style={{
                        padding: this.state.padding,
                        borderRadius: this.state.borderRadius,
                        backgroundColor: this.state.backgroundColor,
                        boxShadow: this.state.boxShadow
                    }}>
                    <div>
                        {/* Spinner of Loading */}
                        <div className="preloader-wrapper small active" style={{display: 'inline-block'}}>
                            <div className="spinner-layer spinner-red-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>

                        <h3 style={{color: '#db4437'}}>Error connecting to the Market :/</h3>
                    </div>
                    <h4 style={{color: 'darkgray'}}>We are working to fix it :v</h4>
                </div>
            </div>
        )
    }
}

export default Error
