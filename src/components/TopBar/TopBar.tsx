import React, {Component} from "react";
import {AddCard} from "../AddCard/AddCard";
import {Search} from "../Search/Search";

export class TopBar extends Component<any, any>{
    render() {
        return (
            <div>
                <AddCard/>
                <Search/>
            </div>
        )
    }
}
