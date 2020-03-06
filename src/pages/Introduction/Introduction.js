import React, { useState } from 'react'

import crytoGif from 'assets/images/crypto.gif'

import './Introduction.scss'

import { navigate } from '@reach/router'

function Introduction() {
    const [style, setStyle] = useState({})
    const handleBtnInSite = () => {
        setStyle({ display: 'none'})
        setTimeout(() => {
        navigate('/book-list')
        }, 5000)
    }

    return (
        <div className="introduction-content">
            <div className="wrapper" data-text="Yes!">
                {/* <h1 className="title">CryptoNanny</h1>
                <h1 className="title">Nanny</h1> */}
            </div>
            <div className="btn site" style={style} onClick={() => handleBtnInSite()}>Start</div>
            {/* <div className="text">
                <div className="title">
                    <h2>Welcome to CryptoNanny</h2>
                </div>
                <div className="content">

                </div>
                
            </div> */}
        </div>
    )
}

export default Introduction