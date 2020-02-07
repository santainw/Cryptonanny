import React from 'react'

import crytoGif from 'assets/images/crypto.gif'

import './Introduction.scss'

function Introduction() {
    return (
        <div className="introduction-content">
            <img className="crypto-gif" src={crytoGif}></img>
        </div>
    )
}

export default Introduction