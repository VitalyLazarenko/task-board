import React,{Component} from "react";
import './addCard.css';

export class AddCard extends  Component<any, any>{
    render() {
        let {typeBtn} = this.props;
        return (
            <div>
                <button id="AddCard" className={typeBtn === 'column' ? "btn-addCard column" : "btn-addCard"}>+</button>
            </div>
        );
    }
}
