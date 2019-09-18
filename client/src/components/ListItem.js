import React from 'react';

class ListItem extends React.Component {


  render(){
    return(
      <div className="row border border-dark p-3">
        <div className="col-12">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 ">
                <h5>{this.props.book.title}</h5>
                <p>Written by: {this.props.book.authors.map((ele,idx) => 
                  {
                    return idx === this.props.book.authors.length - 1 ? ele : ele + ","; 
                  })}</p>
              </div>
              <div className="col-6 text-right">
                <a href={this.props.book.link} className="btn btn-dark mr-2" target="_blank" rel="noopener noreferrer">View</a>
                <button className="btn btn-dark" onClick={() => {this.props.buttonActionHandler(this.props.book)}}>{this.props.buttonTxt}</button> 
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-12 mb-md-0 mb-2">
                <img src={this.props.book.image} alt={this.props.book.title} className="img-fluid"/>
              </div>
              <div className="col-md-10 col-12">
                <p>Description: {this.props.book.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ListItem;