import React from 'react'

import './ViewBook.container.scss'
import swal from 'sweetalert'
import axios from 'axios'
import { navigate } from '@reach/router'

function ViewBook(props) {

    const {
        title,
        image,
        amount
    } = props.location.state

    const handleOnBack = () => {
        navigate('/book-list')
    }

    const handlePurchase = () => {
        // const swal = new Swal()
        axios.post('localhost:3000/product/buy',
            {
                pid: localStorage.getItem('pid'),
                buyer: '0x71647614825B36b12eDB47BdEE86CB7Ca2051392',
                password: '1234'
            }
        )
            .then(() => {
                swal(
                    'Success',
                    'This is a book!',
                    'success'
                )
                    .then(() => {
                        navigate('book-list')
                    })
            })
    }

    return (
        <div className="create-book-container">
            <div className="create-card">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="editor-section">
                    <div className="image-container">
                        <img src={image} />
                    </div>
                    <div className="amount">{amount}</div>
                </div>
                <div className="button-group">
                    <div className="btn purchase" onClick={() => handlePurchase()}>Purchase</div>
                    <div className="btn cancel" onClick={() => handleOnBack()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default ViewBook