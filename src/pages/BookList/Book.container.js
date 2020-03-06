import React, { Component } from 'react'
import axios from 'axios'

import book from 'assets/images/book.jpg'
import book1 from 'assets/images/book1.jpg'
import book2 from 'assets/images/book2.jpg'
import book3 from 'assets/images/book3.jpg'
import book4 from 'assets/images/book4.jpg'
import book5 from 'assets/images/book5.jpg'
import book6 from 'assets/images/book6.jpg'
import book7 from 'assets/images/book7.jpg'


import { navigate } from '@reach/router'

import './Book.container.scss'

const mockPaper = [
    {
        image: book7,
        title: 'にんげん、人間 ',
        amount: '12.003 ETH'
        ,quantity: 100
    },
    {
        image: book2,
        title: 'THE NEW MOVIE',
        amount: '1 ETH'
        ,quantity: 100
    },
    {
        image: book3,
        title: 'Bit coin Block chain 101',
        amount: '7 ETH'
        ,quantity: 100
    },
    {
        image: book4,
        title: 'Blockchain Tech',
        amount: '23 ETH'
        ,quantity: 100
    },
    {
        image: book5,
        title: '10 อันดับ ปืนยอดนิยม',
        amount: '2 ETH'
        ,quantity: 100
    },
    {
        image: book6,
        title: 'ผู้ชาย SEX ห่วย',
        amount: '120 ETH'
        ,quantity: 100
    },
    {
        image: book1,
        title: 'EDUCATION FOR SUSTAINABLE',
        amount: '12.003 ETH'
        ,quantity: 100
    },
    {
        image: book2,
        title: 'THE NEW MOVIE',
        amount: '1 ETH'
        ,quantity: 100
    },
    {
        image: book3,
        title: 'Bit coin Block chain 101',
        amount: '7 ETH'
        ,quantity: 100
    },
    {
        image: book4,
        title: 'Blockchain Tech',
        amount: '23 ETH'
        ,quantity: 100
    },
    {
        image: book5,
        title: '10 อันดับ ปืนยอดนิยม',
        amount: '2 ETH'
        ,quantity: 100
    },
    {
        image: book6,
        title: 'ผู้ชาย SEX ห่วย',
        amount: '120 ETH'
        ,quantity: 100
    },
    {
        image: book1,
        title: 'EDUCATION FOR SUSTAINABLE',
        amount: '12.003 ETH'
        ,quantity: 100
    },
    {
        image: book2,
        title: 'THE NEW MOVIE',
        amount: '1 ETH'
        ,quantity: 100
    },
    {
        image: book3,
        title: 'Bit coin Block chain 101',
        amount: '7 ETH'
        ,quantity: 100
    },
    {
        image: book4,
        title: 'Blockchain Tech',
        amount: '23 ETH'
        ,quantity: 100
    },
    {
        image: book5,
        title: '10 อันดับ ปืนยอดนิยม',
        amount: '2 ETH'
        ,quantity: 100
    },
    {
        image: book6,
        title: 'ผู้ชาย SEX ห่วย',
        amount: '120 ETH'
        ,quantity: 100
    },
    {
        image: book1,
        title: 'EDUCATION FOR SUSTAINABLE',
        amount: '12.003 ETH'
        ,quantity: 100
    },
    {
        image: book2,
        title: 'THE NEW MOVIE',
        amount: '1 ETH'
        ,quantity: 100
    },
    {
        image: book3,
        title: 'Bit coin Block chain 101',
        amount: '7 ETH'
        ,quantity: 100
    },
    {
        image: book4,
        title: 'Blockchain Tech',
        amount: '23 ETH'
        ,quantity: 100
    },
    {
        image: book5,
        title: '10 อันดับ ปืนยอดนิยม',
        amount: '2 ETH'
        ,quantity: 100
    },
    {
        image: book6,
        title: 'ผู้ชาย SEX ห่วย',
        amount: '120 ETH'
        ,quantity: 100
    },
    {
        image: book1,
        title: 'EDUCATION FOR SUSTAINABLE',
        amount: '12.003 ETH'
        ,quantity: 100
    },
    {
        image: book2,
        title: 'THE NEW MOVIE',
        amount: '1 ETH'
        ,quantity: 100
    },
    {
        image: book3,
        title: 'Bit coin Block chain 101',
        amount: '7 ETH'
        ,quantity: 100
    },
    {
        image: book4,
        title: 'Blockchain Tech',
        amount: '23 ETH'
        ,quantity: 100
    },
    {
        image: book5,
        title: '10 อันดับ ปืนยอดนิยม',
        amount: '2 ETH'
        ,quantity: 100
    },
    {
        image: book6,
        title: 'ผู้ชาย SEX ห่วย',
        amount: '120 ETH'
        ,quantity: 100
    },
    {
        image: book1,
        title: 'EDUCATION FOR SUSTAINABLE',
        amount: '12.003 ETH'
        ,quantity: 100
    },
    {
        image: book2,
        title: 'THE NEW MOVIE',
        amount: '1 ETH'
        ,quantity: 100
    },
    {
        image: book3,
        title: 'Bit coin Block chain 101',
        amount: '7 ETH'
        ,quantity: 100
    },
    {
        image: book4,
        title: 'Blockchain Tech',
        amount: '23 ETH'
        ,quantity: 100
    },
    {
        image: book5,
        title: '10 อันดับ ปืนยอดนิยม',
        amount: '2 ETH'
        ,quantity: 100
    },
    {
        image: book6,
        title: 'ผู้ชาย SEX ห่วย',
        amount: '120 ETH'
        ,quantity: 100
    },
    {
        image: book1,
        title: 'EDUCATION FOR SUSTAINABLE',
        amount: '12.003 ETH'
        ,quantity: 100
    },
    {
        image: book2,
        title: 'THE NEW MOVIE',
        amount: '1 ETH'
        ,quantity: 100
    },
    {
        image: book3,
        title: 'Bit coin Block chain 101',
        amount: '7 ETH'
        ,quantity: 100
    },
    {
        image: book4,
        title: 'Blockchain Tech',
        amount: '23 ETH'
        ,quantity: 100
    },
    {
        image: book5,
        title: '10 อันดับ ปืนยอดนิยม',
        amount: '2 ETH'
        ,quantity: 100
    },
    {
        image: book6,
        title: 'ผู้ชาย SEX ห่วย',
        amount: '120 ETH'
        ,quantity: 100
    },
]

class BookContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paperList: [],
            quantityList: []
        }
    }

    componentDidMount() {
        this.setState({
            paperList: mockPaper,
            quantityList: []
        })
        axios.get('http://localhost:3000')
            .then((result) => {
                console.log(result)
                let dataList = result.data.data
                for(let i = 0; i < dataList.length; i++) {
                    axios.get(`http://localhost:3000/products/${dataList[i]}`)
                        .then((book) => {
                            console.log(book)
                            let paper = this.state.paperList
                            paper[i].quantity = book.data.data[2]
                            this.setState({ 
                            paperList: paper})  
                        })
                }
            })
    }

    fetchAllPaper() {
        return axios.get('')
    }

    renderPaperList = () => {
        return mockPaper.map((paper, index) => <div className="paper" key={index} onClick={() => this.handleClickViewPaper(paper)}>
            <h3>{paper.title}</h3>
            <img src={paper.image}></img>
            <div className="detail">{paper.amount}</div>
            {/* <div className="quantity">Quantity: {paper.quantity}</div> */}
        </div>)
    }

    handleClickViewPaper = (paper) => {
        navigate('/view-book', { state: paper })
    }

    render() {
        const RenderPaperList = this.renderPaperList
        return (
            <div className="book-list-container">
                <div className="paper-card">
                    <div className="title">
                        <h1>Paper</h1>
                    </div>
                    <div className="book-container">
                        <RenderPaperList />
                    </div>
                </div>
            </div>
        )
    }
}

export default BookContainer