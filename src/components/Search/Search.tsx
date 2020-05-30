import React, {Component} from "react";
import './search.css';

import store from '../../store';
import {ActionCreators} from "../../store/actions";

export class Search extends Component<any, any> {
  state = {
    searchValue: '',
  }
  onSearchHandler = () => {
    if (this.state.searchValue) {
      store.dispatch(ActionCreators.searchCardsActionCreator(this.state.searchValue, true));
    }
  }

  onClearSearchHandler = () => {
    store.dispatch(ActionCreators.searchCardsActionCreator('', false));
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

        <div id="search"
             className='btn-search'
             onClick={this.onClearSearchHandler}
        >X
        </div>
      </div>
    )
  }
}
