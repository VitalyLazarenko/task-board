import React, {Component} from "react";

import './column.css';
import {Card} from "../Card";
import {ICard} from "../../interfaces";

export class Column extends Component<any, any> {
  render() {
    let {nameColumn, status, createCardClick, editCardClick, cards} = this.props;
    const content = cards.map((card: ICard) => <Card key={card.id}
                                                     data={card}
                                                     editCardClick={editCardClick}/>)
    return (
      <div className={`column-container ${status}`}>
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
