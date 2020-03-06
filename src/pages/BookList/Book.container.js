import React, { Component } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import {
    mockFreePaper,
    mockPurchasePaper
} from './Book.mock'

import './Book.container.scss'

class BookContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paperList: [],
            quantityList: [],
            isFree: true
        }
    }

    componentDidMount() {
        this.setState({
            quantityList: []
        })
        // axios.get('http://localhost:3000')
        //     .then((result) => {
        //         let dataList = result.data.data
        //         for(let i = 0; i < dataList.length; i++) {
        //             axios.get(`http://localhost:3000/products/${dataList[i]}`)
        //                 .then((book) => {
        //                     console.log(book)
        //                     let paper = this.state.paperList
        //                     paper[i].quantity = book.data.data[2]
        //                     this.setState({ 
        //                     paperList: paper})  
        //                 })
        //         }
        //     })
    }

    fetchAllPaper() {
        return axios.get('')
    }

    renderPaperFreeList = () => {
        return mockFreePaper.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper)}>
            <h3>{paper.title}</h3>
            <img src={paper.image}></img>
            <div className="detail">{paper.amount}</div>
        </div>)
    }

    renderPaperPurchaseList = () => {
        return mockPurchasePaper.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper)}>
            <h3>{paper.title}</h3>
            <img src={paper.image}></img>
            <div className="detail">{paper.amount}</div>
        </div>)
    }

    handleClickViewPaper = (paper) => {
        navigate('/view-book', { state: paper })
    }

    render() {
        const RenderPaperFreeList = this.renderPaperFreeList
        const RenderPaperPurchaseList = this.renderPaperPurchaseList
        return (
            <div className="book-list-container">
                <div className="paper-card">
                    <div className="title">
                        <h1>Paper</h1>
                    </div>
                    <div className="tab-group">
                        <div className="tab" onClick={() => this.setState({ isFree: true })}>Free</div>
                        <div className="tab" onClick={() => this.setState({ isFree: false })}>Purchase</div>
                    </div>
                    <div className="book-container">
                        {
                            this.state.isFree ? <RenderPaperFreeList /> : <RenderPaperPurchaseList />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BookContainer