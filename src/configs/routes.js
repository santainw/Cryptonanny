import React from 'react'
import { Router } from '@reach/router'
import {
    Home
} from 'pages'

const Routes = () => {

    return (
      <>
        <Router>
            <Home path='/' />
        </Router>
      </>
    )
  }
  
  export default Routes