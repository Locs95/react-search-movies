import React,{ Component } from 'react'
import Search from './Search'
import Results from './Results'

class SearchResult extends Component {
   render() {
      return(
        <div className="SearchResult">
          <Search />
          <Results />
        </div>
      )
   }
}

export default SearchResult
