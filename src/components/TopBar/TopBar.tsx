import React, {Component} from "react";

import './topBar.css';
import {AddCard} from "../AddCard/AddCard";
import {Search} from "../Search/Search";

export class TopBar extends Component<any, any>{
    render() {
        return (
            <div className="topBar-container">
                <Search/>
            </div>
        )
    }
}
