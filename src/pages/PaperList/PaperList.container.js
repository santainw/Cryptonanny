import React, { Component } from 'react'
import axios from 'axios'
import {
    mockFreePaper,
    mockSellPaper
} from './PaperList.mock'
import { navigate } from '@reach/router'

import './PaperList.container.scss'

class PaperListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paperList: [],
            isFree: true,
            user_wallet: localStorage.getItem('user_wallet')
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getAllProducts')
            .then((result) => {
                const products = result.data.products
                this.setState({
                    paperList: products.filter((product) =>
                        product.seller === this.state.user_wallet
                    )
                })
            })
    }

    fetchAllPaper() {
        return axios.get('')
    }

    renderPaperFreeList = () => {
        return mockFreePaper.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper)}>
            <div className="title">{paper.title}</div>
            <div className="short-description">{paper.description}</div>
            <div className="editor">{paper.editor}</div>
        </div>)
    }

    renderPaperSellList = () => {
        return this.state.paperList.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper)}>
            <div className="title">{paper.name}</div>
            <div className="short-description">{paper.imgPath}</div>
            <div className="editor">{paper.price} ETH</div>
        </div>)
    }

    handleClickViewPaper = (paper) => {
        navigate('/view-paper', { state: paper })
    }

    handleClickCreatePage = () => {
        navigate('/create-paper')
    }

    render() {
        const RenderPaperFreeList = this.renderPaperFreeList
        const RenderPaperSellList = this.renderPaperSellList
        const freeStyle = this.state.isFree ? { textDecoration: 'underline' } : {}
        const purchaseStyle = !this.state.isFree ? { textDecoration: 'underline' } : {}
        return (
            <div className="paper-list-container">
                <div className="paper-card">
                    <div className="title">
                        <h1>Paper</h1>
                        <div className="btn" onClick={() => this.handleClickCreatePage()}>Create Paper</div>
                    </div>
                    <div className="tab-group">
                        <div className="tab" onClick={() => this.setState({ isFree: true })} style={freeStyle}>Free</div>
                        <div className="tab" onClick={() => this.setState({ isFree: false })} style={purchaseStyle}>Sell</div>
                    </div>
                    {
                        this.state.isFree ? <RenderPaperFreeList /> : <RenderPaperSellList />

                    }
                </div>
            </div>
        )
    }
}

export default PaperListContainer