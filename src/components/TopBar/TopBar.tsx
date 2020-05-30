import React, {Component} from "react";

import './topBar.css';
import {Search} from "../Search/Search";

export class TopBar extends Component<any, any>{
    render() {
        return (
            <div className="topBar-container">
                <span className="author-name">Author: Vitaliy Lazarenko</span>
                <Search/>
            </div>
        )
    }
}
