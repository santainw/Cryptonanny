import React, { useState } from 'react'
import { Router } from '@reach/router'
import {
  Root,
  Home,
  PaperList,
  CreatePaper,
  ViewPaper,
  BookList,
  ViewBook
} from 'pages'
import axios from 'axios'
import swal from 'sweetalert'
import Favicon from 'react-favicon';
import { navigate } from '@reach/router'

const Routes = () => {

  const [username, setUsername] = useState('')
  const [coin, setCoin] = useState('0')

  const handleEmit = (value) => {
    const user_wallet = localStorage.getItem('user_wallet')
    switch (value) {
      case 'user_wallet':
        axios.get(`http://localhost:3001/balance/${user_wallet}`)
          .then((value) => {
            const parseBalance = value.data.balance.includes('.') ? value.data.balance.substring(0, value.data.balance.indexOf('.') + 2) : value.data.balance
            setCoin(parseBalance)
          })
        break;
      case 'user_name':
        const user_name = localStorage.getItem('user_name')
        setUsername(user_name)
        break;
      case 'buy':
        const buyer = localStorage.getItem('user_wallet')
        const amount = localStorage.getItem('current_buy_amount')
        const seller_id = '0x197b6caFAf8507eF27926027b292343b7D8f76b8'
        const pid = localStorage.getItem('pid')
        axios.post('http://localhost:3001/products/buy',
          {
            pid: pid,
            buyer: buyer,
            password: '1234',
            to: seller_id
          }
        )
          .then(() => {
            swal(
              'Success',
              'This is a book!',
              'success'
            )
              .then(() => {
                handleEmit('user_wallet')
                navigate('book-list')
              })
          })
        break;
      case 'view_count':
        axios.post('http://localhost:3001/products/free', {
          to: user_wallet
        })
          .then((result) => {
            console.log(result)
            handleEmit('user_wallet')
          })
        break;
      case 'create_book':
        const paperTitle = localStorage.getItem('productNameInput')
        const paperPrice = localStorage.getItem('productPriceInput')

        let formPaper = new FormData()
        formPaper.append('productImageInput', 'https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg')
        formPaper.append('productNameInput', paperTitle)
        formPaper.append('productPriceInput', paperPrice)
        formPaper.append('productSeller', user_wallet)
        formPaper.append('productQtyInput', '20')
        formPaper.append('accountPassword', '1234')
        axios.post('http://localhost:3001/products/add', formPaper)
          .then(() => {
            swal(
              'Success!',
              'Paper Created !',
              'success')
              .then(() => {
                navigate('/paper-list')
              })
          })
        break;
    }
  }

  return (
    <>
      {/* <Favicon url="/assets/images/nanny.jpg" /> */}
      <Router>
        <Root path='/' coin={coin} username={username}>
          <Home path='/' handleEmit={handleEmit} />
          <BookList path='/book-list' handleEmit={handleEmit} />
          <PaperList path='/paper-list' handleEmit={handleEmit} />
          <CreatePaper path='/create-paper' handleEmit={handleEmit} />
          <ViewPaper path='/view-paper' handleEmit={handleEmit} />
          <ViewBook path='/view-book' handleEmit={handleEmit} />
        </Root>
      </Router>
    </>
  )
}

export default Routes