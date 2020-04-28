import * as React from 'react';
import SearchResult from "./SearchResult";
import FilterLinks from "./FilterLinks";

export default class SearchInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResult: {},
      submitted: false
    }
  }

  search(searchText){
    fetch("http://localhost:8080/index/product_catalog_search_en_us?q="+searchText)
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({ searchResult: result})
          this.setState({submitted: true})
        }
    )
  }

  render() {
    return (
        <div>
          <input
            type="text"
            placeholder="Search..."
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.search(event.target.value)
              }
            }}
          />
          {this.state.submitted && <FilterLinks searchResult={this.state.searchResult}/>}
          {this.state.submitted && <SearchResult searchResult={this.state.searchResult}/>}
        </div>
    );
  }

}