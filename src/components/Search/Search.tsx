import React,{Component} from "react";
import './search.css';

export class Search extends Component<any, any>{
    searchClick() {
        alert('Search click!');
    }

    render() {
        return (
                <div id="search"
                     className='btn-search'
                     onClick={this.searchClick}
                >Search</div>
        )
    }
}
