import React from 'react'
import { Router } from '@reach/router'
import {
  Root,
  Home,
  PaperList,
  CreatePaper,
  ViewPaper
} from 'pages'

import Favicon from 'react-favicon';

const Routes = () => {

  return (
    <>
      {/* <Favicon url="/assets/images/nanny.jpg" /> */}
      <Router>
        <Root path='/'>
          <Home path='/' />
          <PaperList path='/paper-list' />
          <CreatePaper path='/create-paper' />
          <ViewPaper path='/view-paper' />
        </Root>
      </Router>
    </>
  )
}

export default Routes