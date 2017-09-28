import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from '../actions'

class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
        query: ''
      }
      this.onInputChange = this.onInputChange.bind(this);
      this.onSearchClick = this.onSearchClick.bind(this);
   }

   onInputChange(e) {
      this.setState({
         query: e.target.value
      })
   }

   onSearchClick() {
      this.props.getMovies(this.state.query);
      this.setState({
         query: ''
      });
   }


   render() {
      return(
        <div className="Search">
         <div className="col-sm-12">

            <div className="form-group">
              <div className="input-group">
               <input type="text" onChange={this.onInputChange} className="form-control" />
               <div className="input-group-btn">
                 <button className="btn btn-success text-uppercase" onClick={this.onSearchClick}>search</button>
               </div>
              </div>
            </div>

          </div>
        </div>
      )
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMovies: getMovies },dispatch);
}

export default connect(null,mapDispatchToProps)(Search)
