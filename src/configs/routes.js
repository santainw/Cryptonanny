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
    switch (value) {
      case 'user_wallet':
        const user_wallet = localStorage.getItem('user_wallet')
        axios.get(`http://localhost:3001/balance/${user_wallet}`)
          .then((value) => {
            const parseBalance = value.data.balance.substring(0, value.data.balance.indexOf('.') + 2)
            setCoin(parseBalance)
          })
        break;
      case 'user_name':
        const user_name = localStorage.getItem('user_name')
        setUsername(user_name)
        break;
      case 'buy':
        axios.post('http://localhost:3000/products/buy',
          {
            pid: localStorage.getItem('pid'),
            buyer: '0xbC94Ba9c1A4D8a899ffA6fCd05e7806aC39D2923',
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
        break;
    }
  }

  return (
    <>
      {/* <Favicon url="/assets/images/nanny.jpg" /> */}
      <Router>
        <Root path='/' coin={coin} username={username}>
          <Home path='/' handleEmit={handleEmit} />
          <BookList path='/book-list' />
          <PaperList path='/paper-list' />
          <CreatePaper path='/create-paper' />
          <ViewPaper path='/view-paper' />
          <ViewBook path='/view-book' />
        </Root>
      </Router>
    </>
  )
}

export default Routes