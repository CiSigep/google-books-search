import React from 'react';

// An Item in the list, displays book information.
const ListItem = props => {

  return (
    <div className="row border border-dark p-3">
      <div className="col-12">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 ">
              <h5>{props.book.title}</h5>
              <p>Written by: {props.book.authors.map((ele, idx) => {
                return idx === props.book.authors.length - 1 ? ele : ele + ",";
              })}</p>
            </div>
            <div className="col-6 text-right">
              <a href={props.book.link} className="btn btn-dark mr-2" target="_blank" rel="noopener noreferrer">View</a>
              <button className="btn btn-dark" onClick={() => { props.actionHandler(props.book) }}>{props.buttonTxt}</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-12 mb-md-0 mb-2">
              <img src={props.book.image} alt={props.book.title} className="img-fluid" />
            </div>
            <div className="col-md-10 col-12">
              <p>Description: {props.book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;