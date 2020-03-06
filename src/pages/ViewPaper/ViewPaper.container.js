import React from 'react'

import './ViewPaper.container.scss'

import { navigate } from '@reach/router'

function ViewPaper(props) {

    const {
        name,
        imgPath,
        price
    } = props.location.state

    const handleOnBack = () => {
        navigate('/paper-list')
    }

    return (
        <div className="create-paper-container">
            <div className="create-card">
                <div className="title">
                    <h1>{name}</h1>
                    <h5>{price} ETH</h5>
                </div>
                <div className="editor-section">
                    {imgPath}
                </div>
                <div className="btn" onClick={() => handleOnBack()}>Back</div>
            </div>
        </div>
    )
}

export default ViewPaper