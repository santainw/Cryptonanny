import React from 'react'

import crytoGif from 'assets/images/crypto.gif'

import './Introduction.scss'

import { navigate } from '@reach/router'

function Introduction() {

    const handleBtnInSite = () => {
        navigate('/paper-list')
    }

    return (
        <div className="introduction-content">
            <img className="crypto-gif" src={crytoGif} alt={'background'}></img>
            <div className="text">
                <div className="title">
                    <h2>How to</h2>
                </div>
                <div className="content">

                </div>
                <div className="btn site" onClick={() => handleBtnInSite()}>Start</div>
            </div>
        </div>
    )
}

export default Introduction