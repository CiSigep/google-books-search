import React from 'react';
import ListItem from './ListItem';

const SearchList = (props) => {
  return (
    <div className="card col-12 border border-dark">
      <h5 className="card-title mt-2">Results</h5>
      <div className="card-body">
        <div className="container-fluid">
          {props.books.map((ele, idx) => {
            return (
              <ListItem book={ele} key={idx} buttonTxt="Save" buttonActionHandler={props.saveBook}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchList;