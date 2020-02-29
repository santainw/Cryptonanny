import React from 'react'
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

import Favicon from 'react-favicon';

const Routes = () => {

  return (
    <>
      {/* <Favicon url="/assets/images/nanny.jpg" /> */}
      <Router>
        <Root path='/'>
          <Home path='/' />
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