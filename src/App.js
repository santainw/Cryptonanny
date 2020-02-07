import React from 'react'
import { Provider } from 'react-redux'
import { Routes, store, service } from 'configs'
import { environment } from 'const'
import 'assets/styles/global.scss'

const storeOfProvider = store(environment.projectName)
service({}, store)

function App() {
  return (
    <Provider store={storeOfProvider}>
      <Routes />
    </Provider>
  );
}

export default App;
