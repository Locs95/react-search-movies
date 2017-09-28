import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchResult from './SearchResult'
import Details from './Details'

class App extends Component {
   render() {
     return(
       <div className="App container">
        <Router>
          <Switch>
           <Route exact path="/" component={SearchResult} />
           <Route path="/details/:id" component={Details} />
          </Switch>
        </Router>
       </div>
     )
   }
}

export default App
