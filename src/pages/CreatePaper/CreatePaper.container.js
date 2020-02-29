import React from 'react'
import axios from 'axios'

import './CreatePaper.container.scss'
import book7 from 'assets/images/book7.jpg'
import { navigate } from '@reach/router'

function CreatePaper() {

    const createPaper = () => {
        let formPaper = new FormData()
        formPaper.append('productImageInput', book7)
        formPaper.append('productNameInput', 'หนังสือ')
        formPaper.append('productPriceInput', '800')
        formPaper.append('productSeller', '0x7F4b3B98788E36f9A62bFE227EBC1328157f2f44')
        formPaper.append('productQtyInput', '20')
        formPaper.append('accountPassword', '1234')

        return axios.post('localhost:3000/product/add',
            formPaper
            // {
            //     productImageInput: book7,
            //     productNameInput: 'หนังสือ',
            //     productPriceInput: '800',
            //     productSeller: '0x7F4b3B98788E36f9A62bFE227EBC1328157f2f44',
            //     productQtyInput: '20',
            //     accountPassword: '1234'
            // }
        )
        .then((result) => {
            localStorage('pid', result.data.pid)
        })
    }

    const handleOnCreate = () => {
        createPaper()
            .then(() => {
                navigate('/paper-list')
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
                        <input placeholder='title' />
                    </div>
                    <div className="form">
                        <div className="text">Price: </div>
                        <input placeholder='price' type="number" /><div className="unit">ETH</div>
                    </div>
                    <div className="form">
                        <input type="file" />
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