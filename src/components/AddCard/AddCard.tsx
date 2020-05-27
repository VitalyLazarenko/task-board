import React,{Component} from "react";
import './addCard.css';

export class AddCard extends  Component<any, any>{
    addClick() {
        alert('Add click!');
    }

    render() {
        let {typeBtn} = this.props;
        return (
                <div id="AddCard"
                        className={typeBtn === 'column' ? "btn-addCard column" : "btn-addCard"}
                        onClick={this.addClick}
                >+</div>
        );
    }
}
