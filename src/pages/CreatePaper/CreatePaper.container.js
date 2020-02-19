import React from 'react'

import './CreatePaper.container.scss'

import { navigate } from '@reach/router'

function CreatePaper() {

    const handleOnCreate = () => {
        navigate('/paper-list')
    }

    return (
        <div className="create-paper-container">
            <div className="create-card">
                <div className="title">
                    <h1>Create Paper</h1>
                </div>
                <div className="editor-section">
                    <textarea></textarea>
                </div>
                <div className="btn" onClick={() => handleOnCreate()}>Create</div>
            </div>
        </div>
    )
}

export default CreatePaper