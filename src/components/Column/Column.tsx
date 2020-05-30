import React, {Component} from "react";

import store from '../../store';
import './column.css';
import {Card} from "../Card";
import {ICard} from "../../interfaces";
import {moveCardThunk} from "../../store/thunks";

export class Column extends Component<any, any> {
  onDragCardHandler = (e: any) => {
    e.preventDefault();
  }

  onDropCardHandler = (e: any) => {
    // @ts-ignore
    store.dispatch(moveCardThunk(e.dataTransfer.getData('text'), this.props.status));
  }

  render() {
    let {nameColumn, status, createCardClick, editCardClick, cards} = this.props;
    const content = cards.map((card: ICard) => <Card key={card.id}
                                                     data={card}
                                                     editCardClick={editCardClick}/>)
    return (
      <div className={`column-container ${status}`} onDragOver={this.onDragCardHandler} onDrop={this.onDropCardHandler}>
        <div className="column-header">
          <label>{nameColumn.toUpperCase()}</label>
          <label>{content.length}</label>
        </div>

        {content}

        <div id="AddCard"
             className="btn-addCard column"
             onClick={() => createCardClick(status)}
        >+
        </div>
      </div>
    )
  }
}
