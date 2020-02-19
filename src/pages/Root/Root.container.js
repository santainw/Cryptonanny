import React, { Component } from 'react'
import {
    Navbar
} from 'components'

import './Root.container.scss'

class RootContainer extends Component {

    render() {
        const { children } = this.props
        return (
            <div className="main-container">
                <Navbar />
                <div className="main-content">
                    {children}
                </div>
            </div>
        )
    }
}

export default RootContainer