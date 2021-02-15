import ReactDOM from 'react-dom'
import React from 'react'
import App from './App/index'
import store from '@Store/'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)
