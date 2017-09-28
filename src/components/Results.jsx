import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Results extends Component {

    constructor(props) {
        super(props);
        this.getDetails = this.getDetails.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    getDetails(e) {
       e.preventDefault();
    }

    renderList(movieData) {

        const image = movieData.map(item => 'http://image.tmdb.org/t/p/w185'+ item.poster_path)
      //  console.log(image)

        return(
          movieData.map((item,i) => {
              return(
                <div className="col-sm-4" key={Math.random()}>
                   <div className="card">
                     <img  className="card-img-top" src={image[i]} alt="" />
                     <div className="card-body">
                       <Link to={`/details/${item.id}`}><h4 className="card-title">{item.title}</h4></Link>
                     </div>
                   </div>
                </div>
              )
          })
        )

    }

    render() {
      return(
        <div className="Results">
         <div className="col-sm-12">
           <div className="row">
           {
              this.props.movies.map(this.renderList)
           }
          </div>
         </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
   return {
      movies: state.movies
   }
}

export default connect(mapStateToProps)(Results)
