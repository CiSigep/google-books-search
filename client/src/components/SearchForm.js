import React from 'react';

// The search form, searches for books when the search button is clicked.
class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState({query: e.target.value});
  }

  handleClick = e => {
    this.props.search(this.state.query);
  }

  render() {
    return (
      <div className="card col-12 border border-dark">
        <h5 className="card-title mt-2">Search</h5>
        <div className="card-body">
          <div className="input-group">
            <input value={this.state.query} onChange={this.handleChange} type="text" className="form-control" placeholder="Book Name" aria-label="Book Name"/>
              <div className="input-group-append">
                <button onClick={this.handleClick} className="btn btn-dark" type="button">Search</button>
              </div>
            </div>
          </div>
        </div>
        );
      }
}

export default SearchForm;