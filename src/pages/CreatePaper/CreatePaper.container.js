import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './CreatePaper.container.scss'
import book7 from 'assets/images/book7.jpg'
import { navigate } from '@reach/router'
import swal from 'sweetalert'

function CreatePaper(props) {
    const [createType, setCreateType] = useState('sell')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('0')
    const [freeStyle, setFreeStyle] = useState({})
    const [sellStyle, setSellStyle] = useState({})
    const [description, setDescription] = useState('')


    const createPaper = () => {
        let formPaper = new FormData()
        // let file = new File()

        formPaper.append('productImageInput', 'https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg')
        formPaper.append('productNameInput', 'หนังสือ')
        formPaper.append('productPriceInput', '800')
        formPaper.append('productSeller', '0x3D7382fA43e4AF3b0dB7B64Fb2E11cbcB32A162c')
        formPaper.append('productQtyInput', '20')
        formPaper.append('accountPassword', '1234')

        return axios.post('http://localhost:3001/products/add',
            formPaper,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
            // {
            //     productImageInput: book7,
            //     productNameInput: 'หนังสือ',
            //     productPriceInput: '800',
            //     productSeller: '0x7F4b3B98788E36f9A62bFE227EBC1328157f2f44',
            //     productQtyInput: '20',
            //     accountPassword: '1234'
            // }
        )
    }

    const handleOnCreate = () => {
        localStorage.setItem('productNameInput', title)
        localStorage.setItem('productPriceInput', price)
        localStorage.setItem('productImageInput', description)
        props.handleEmit('create_book')
        // createPaper()
        //     .then((result) => {
        //         const data = result.data.data
        //         localStorage.setItem('pid', data.pid)
        //         swal(
        //             'Success!',
        //             'Paper Created !',
        //             'success')
        //             .then(() => {
        //                 navigate('/paper-list')
        //             })
        //     })
    }

    const RenderCreateType = () => {
        return <div className="create-type-container">
            <div className="button" style={freeStyle} onClick={() => setCreateType('free')}>Free</div>
            <div className="button" style={sellStyle} onClick={() => setCreateType('sell')}>Sell</div>
        </div>
    }

    const handlePrice = (value) => {
        if (createType === 'free') {
            setPrice('0')
        } else {
            setPrice(value)
        }
    }

    const handleCreateType = (type) => {
        if (type === 'free') {
            setPrice('0')
            setFreeStyle({ background: 'black', color: 'white' })
            setSellStyle({ background: '#949494', color: 'white' })
        } else {
            setSellStyle({ background: 'black', color: 'white' })
            setFreeStyle({ background: '#949494', color: 'white' })
        }
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
                        <input placeholder='title' onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="create-type-container">
                        <div className="button" style={freeStyle} onClick={() => handleCreateType('free')}>Free</div>
                        <div className="button" style={sellStyle} onClick={() => handleCreateType('sell')}>Sell</div>
                    </div>
                    <div className="form"><input placeholder='price' 
                    className="price" value={price} 
                    onChange={(e) => handlePrice(e.target.value)}/>
                        <div className="unit">ETH</div></div>
                    <div className="form">
                        <input type="file" />
                    </div>
                </div>
                <div className="editor-section">
                    <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="btn" onClick={() => handleOnCreate()}>Create</div>
            </div>
        </div>
    )
}

export default CreatePaper