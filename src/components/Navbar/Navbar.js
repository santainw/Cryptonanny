import React from 'react'

import { navigate } from '@reach/router'

import './Navbar.scss'

function Navbar() {

    const handleClickLogo = () => {
        navigate('/')
    }

    const handleClickUser = () => {
        navigate('/paper-list')
    }

    return (
        <div className="navbar">
            <div className="project-name" onClick={() => handleClickLogo()}>
                Cryptonanny
            </div>
            <div className="wallet">
                <div className="coin" onClick={() => handleClickUser()}>N'beatiful nan</div>
            </div>
        </div>
    )
}

export default Navbar