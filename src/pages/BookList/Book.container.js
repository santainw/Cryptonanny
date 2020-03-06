import React, { Component } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import {
    mockFreePaper,
    mockPurchasePaper
} from './Book.mock'
import { Loading } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBook } from '@fortawesome/free-solid-svg-icons'

import './Book.container.scss'

class BookContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            freePaper: [],
            purchasePaper: [],
            quantityList: [],
            isFree: true,
            viewList: []
        }
    }

    componentDidMount() {
        this.setState({
            quantityList: []
        })

        setTimeout(() => {
            this.setState({
                freePaper: mockFreePaper,
                purchasePaper: mockPurchasePaper
            })
            const viewList = localStorage.getItem('view_list')
            if (viewList === null) {
                const currentView = []
                mockFreePaper.map(() => {
                    currentView.push(Math.floor(Math.random() * 500))
                })
                localStorage.setItem('view_list', currentView)
                this.setState({ viewList: currentView })
            } else {
                this.setState({ viewList: viewList.split(',') })
            }
        }, 800)

    }

    renderPaperFreeList = () => {
        return (this.state.freePaper.length === 0 && this.state.viewList.length === 0) ? <Loading /> : this.state.freePaper.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper, index)}>
            <h3>{paper.title}</h3>
            <img src={paper.image}></img>
            <div className="detail">{paper.amount} ETH</div>
            <div className="view"><FontAwesomeIcon icon={faEye} />{this.state.viewList[index]}</div>
        </div>)
    }

    renderPaperPurchaseList = () => {
        return this.state.purchasePaper.length === 0 && this.state.viewList.length === 0 ? <Loading /> : this.state.purchasePaper.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper, index)}>
            <h3>{paper.title}</h3>
            <img src={paper.image}></img>
            <div className="detail">{paper.amount}</div>
            <div className="view"><FontAwesomeIcon icon={faEye} />{this.state.viewList[index]}</div>
        </div>)
    }

    handleClickViewPaper = (paper, index) => {
        navigate('/view-book', { state: { ...paper, viewIndex: index } })
    }

    render() {
        const RenderPaperFreeList = this.renderPaperFreeList
        const RenderPaperPurchaseList = this.renderPaperPurchaseList
        const freeStyle = this.state.isFree ? { textDecoration: 'underline' } : {}
        const purchaseStyle = !this.state.isFree ? { textDecoration: 'underline' } : {}
        return (
            <div className="book-list-container">
                <div className="paper-card">
                    <div className="title">
                        <FontAwesomeIcon icon={faBook} /><h1>Paper</h1>
                    </div>
                    <div className="tab-group">
                        <div className="tab" onClick={() => this.setState({ isFree: true })} style={freeStyle}>Free</div>
                        <div className="tab" onClick={() => this.setState({ isFree: false })} style={purchaseStyle}>Purchase</div>
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