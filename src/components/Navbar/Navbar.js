import React from 'react'

import { navigate } from '@reach/router'

import './Navbar.scss'

function Navbar() {

    const handleClickLogo = () => {
        navigate('/')
    }

    return (
        <div className="navbar">
            <div className="project-name" onClick={() => handleClickLogo()}>
                Cryptonanny
            </div>
            <div className="wallet">
                <div className="coin">0.00 NC</div>
            </div>
        </div>
    )
}

export default Navbar