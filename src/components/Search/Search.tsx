import React,{Component} from "react";
import './search.css';

export class Search extends Component<any, any>{
    searchClick() {
        alert('Search is ready!');
    }

    render() {
        return (
            <div>
                <button id="search" className='btn-search' onClick={this.searchClick} >Search</button>
            </div>
        )
    }
}
