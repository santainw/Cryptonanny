import React, { Component } from 'react'
import {
    Navbar
} from 'components'

import './Root.container.scss'

class RootContainer extends Component {

    render() {
        const { children, coin, username, handleEmit } = this.props
        return (
            <div className="main-container">
                <Navbar coin={coin} username={username} handleEmit={handleEmit}/>
                <div className="main-content">
                    {children}
                </div>
            </div>
        )
    }
}

export default RootContainer