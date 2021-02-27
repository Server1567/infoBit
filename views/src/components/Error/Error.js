import React, { Component } from 'react'

class Error extends Component {
    // Assignment of State's Component
    constructor(props) {
        super(props)

        this.state = {
            timeOver: false
        }
    }

    // Estimated time to finish uploading and display Fatal Error
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ timeOver: true })
        }, 40000)
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
                    <div className="card" style={{padding: '115px 50px', borderRadius: '25px'}}>
                        <center>
                            <h1 style={{color: '#db4437'}}>Error 404 Not Found</h1>
                            <h4 style={{color: 'darkgray'}}>The API has expired, contact with us to resolve it.</h4>
                        </center>
                    </div>
                </div>
            )
        }

        return (
            <div className="col s12">
                <div className="card" style={{padding: '115px 50px', borderRadius: '25px'}}>
                    {/* Spinner of Loading */}
                    <div>
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
