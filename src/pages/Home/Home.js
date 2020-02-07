import React, { Component } from 'react'
import {
    Navbar
} from 'components'
import { Introduction } from 'pages'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Introduction />
            </div>
        )
    }
}

export default Home