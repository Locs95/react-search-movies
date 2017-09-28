import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDetails } from '../actions/index'
import { Link } from 'react-router-dom'

class Details extends Component {

   componentDidMount() {
       this.props.getDetails(this.props.match.params.id);
   }

   renderList(movieData) {

       const movie = movieData.map(item => 'https://youtube.com/embed/' + item.key );

       return(
           movieData.map((item,i) => {
               return(
                 <div className="col-sm-12" key={Math.random()}>
                   <div className="embed-responsive embed-responsive-16by9">
                     <iframe className="embed-responsive-item" src={movie[i]} frameBorder="0" allowFullScreen></iframe>
                   </div>
                 </div>
               )
           })
       )
   }

   render() {

      return(
        <div className="Details">
          <div className="row">
          <div className="col-sm-12">
            <div className="alert alert-success">
              <Link className="btn btn-success" to="/">Back</Link>
            </div>
          </div>
          {
             this.props.details.map(this.renderList)
          }
          </div>
        </div>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ getDetails: getDetails }, dispatch);
}

function mapStateToProps(state) {
   return {
      details: state.details
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details);
