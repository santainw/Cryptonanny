import React from 'react'
import axios from 'axios'

import './CreatePaper.container.scss'

import { navigate } from '@reach/router'

function CreatePaper() {

    const createPaper = () => {
        return axios.post('', {

        })
    }

    const handleOnCreate = () => {
        navigate('/paper-list')
        createPaper()
            .then(() => {
                
            })
    }

    return (
        <div className="create-paper-container">
            <div className="create-card">
                <div className="title">
                    <h1>Create Paper</h1>
                </div>
                <div className="create-form">
                    <div className="form">
                        <div className="text">Title: </div>
                        <input placeholder='title'/>
                    </div>
                    <div className="form">
                        <div className="text">Price: </div>
                        <input placeholder='price'/><div className="unit">ETH</div>
                    </div>
                    <div className="form">
                        <input type="file"/>
                    </div>
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