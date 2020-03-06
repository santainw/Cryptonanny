import React, { useState, useEffect } from 'react'

import './ViewBook.container.scss'
import swal from 'sweetalert'
import axios from 'axios'
import { navigate } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function ViewBook(props) {
    const {
        handleEmit
    } = props

    const {
        title,
        image,
        amount,
        pid,
        viewIndex
    } = props.location.state

    useEffect(() => {
        let viewList = localStorage.getItem('view_list')
        viewList = viewList.split(',')
        viewList[viewIndex] = Number(viewList[viewIndex]) + 1
        localStorage.setItem('view_list', viewList)
        if (pid === undefined) {
            viewBenefit()
        }
    }, [])

    const viewBenefit = () => {
        handleEmit('view_count')
    }

    const handleOnBack = () => {
        navigate('/book-list')
    }

    const handlePurchase = () => {
        localStorage.setItem('current_buy_amount', amount.split(' ')[0])
        localStorage.setItem('pid', pid)
        props.handleEmit('buy')
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
                    <div className="view"><FontAwesomeIcon icon={faEye} />{Number(localStorage.getItem('view_list').split(',')[viewIndex]) + 1}</div>
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