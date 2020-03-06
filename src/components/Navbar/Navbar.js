import React, { useState, useEffect } from 'react'

import { navigate } from '@reach/router'

import './Navbar.scss'

function Navbar(props) {

    useEffect(() => {   
    }, [])

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
                <div className="coin" onClick={() => handleClickUser()}>{ props.username } {props.coin} ETH</div>
            </div>
        </div>
    )
}

export default Navbar