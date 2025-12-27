import App from '../../Projects/ShoppingList/App.jsx'
import { Provider } from 'react-redux'
import store from '../../Projects/ShoppingList/store.js'

import React from 'react'

function ShoppingApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default ShoppingApp
