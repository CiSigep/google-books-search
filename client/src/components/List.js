import React from 'react';
import ListItem from './ListItem';

// The list of books at the bottom of the page, used in both Search and saved.
const List = (props) => {
  return (
    <div className="card col-12 border border-dark">
      <h5 className="card-title mt-2">{props.title}</h5>
      <div className="card-body">
        <div className="container-fluid">
          { props.books.length === 0 ? 
          <div className="row">
            Nothing is here.
          </div>
          :
          props.books.map((ele, idx) => {
            return (
              <ListItem book={ele} key={idx} buttonTxt={props.buttonTxt} actionHandler={props.actionHandler}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;