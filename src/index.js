import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from './components/App'

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
 <Provider store={storeWithMiddleware(reducers)}>
   <App />
 </Provider>,
  document.getElementById('root')
)
