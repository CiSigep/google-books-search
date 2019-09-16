import React from 'react';
import API from '../utils/API';

class Search extends React.Component {

  componentDidMount() {
    API.ping();
  }

  render(){
    return (
      <div>
        Search Here
      </div>
    );
  }
}

export default Search;