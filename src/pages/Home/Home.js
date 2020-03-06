import React, { Component } from 'react'
import { Introduction } from 'pages'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Introduction handleEmit={this.props.handleEmit}/>
            </div>
        )
    }
}

export default Home