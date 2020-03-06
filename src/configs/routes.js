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

import Favicon from 'react-favicon';

const Routes = () => {

  const [username, setUsername] = useState('')
  const [coin, setCoin] = useState('0')

  const handleEmit = (value) => {
    console.log(value)
    switch (value) {
      case 'user_wallet':
        const user_wallet = localStorage.getItem('user_wallet')
        axios.get(`http://localhost:3001/balance/${user_wallet}`)
          .then((value) => {
            console.log(value)
            setCoin(value.balance)
          })
        break;
      case 'user_name':
        const user_name = localStorage.getItem('user_name')
        setUsername(user_name)
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