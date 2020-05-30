import React, {Component} from "react";
import './search.css';

export class Search extends Component<any, any> {
  state = {
    searchValue: '',
  }
  onSearchHandler = () => {
    if (this.state.searchValue) {
      console.log(this.state.searchValue);
    }else {
      alert('Enter a search word!!!');
    }
  }

  render() {
    return (
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={(e) => this.setState({searchValue: e.target.value})}/>
        <div id="search"
             className='btn-search'
             onClick={this.onSearchHandler}
        >Search
        </div>
      </div>
    )
  }
}
