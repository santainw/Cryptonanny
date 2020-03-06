import React, { useState, useEffect } from 'react'

import crytoGif from 'assets/images/crypto.gif'
import swal from 'sweetalert'
import './Introduction.scss'
import { navigate } from '@reach/router'

const mockUser = {
    'testNanny': '0x197b6caFAf8507eF27926027b292343b7D8f76b8'
}

function Introduction(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleBtnInSite = () => {
        if (mockUser[username] === undefined) {
            swal(
                'Fail!',
                'Wrong username and password !',
                'warning'
            )
        } else {
            swal(
                'Success!',
                'Login success!',
                'success')
                .then(() => {
                    localStorage.setItem('user_wallet', mockUser[username])
                    localStorage.setItem('user_name', username)
                    props.handleEmit('user_wallet')
                    props.handleEmit('user_name')
                    // navigate('/book-list')
                })
        }
    }

    return (
        <div className="introduction-content">
            <div className="wrapper" data-text="Yes!">
            </div>
            <div className="login-container">
                <div className="login-form">
                    <div className="text">Username</div>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="login-form">
                    <div className="text">Password</div>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="btn site" onClick={() => handleBtnInSite()}>Login</div>
            </div>
        </div>
    )
}

export default Introduction