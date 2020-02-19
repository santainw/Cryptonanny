import React from 'react'

import './ViewPaper.container.scss'

import { navigate } from '@reach/router'

function ViewPaper(props) {
    console.log(props)
    const {
        title,
        description,
        editor
    } = props.location.state

    const handleOnBack = () => {
        navigate('/paper-list')
    }

    return (
        <div className="create-paper-container">
            <div className="create-card">
                <div className="title">
                    <h1>{title}</h1>
                    <h5>{editor}</h5>
                </div>
                <div className="editor-section">
                    {description}
                </div>
                <div className="btn" onClick={() => handleOnBack()}>Back</div>
            </div>
        </div>
    )
}

export default ViewPaper