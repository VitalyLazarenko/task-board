import React, {Component} from "react";

import './board.css';
import {Column} from "../Column";
import {CreateEditCard} from "../CreateEditcard";

export class Board extends Component<any, any> {
  state = {
    popUp: false
  }

  handleClick = () => {
    this.setState({popUp: !this.state.popUp})
  }

  render() {
    return (
      <div className="board-container">
        {this.state.popUp && <CreateEditCard onBtnClick={this.handleClick}/>}

        <Column nameColumn={'Backlog'}
                status={'Backlog'}
                onBtnClick={this.handleClick}/>
        <Column nameColumn={'Selected'} status={'Selected'} onBtnClick={this.handleClick}/>
        <Column nameColumn={'Running'} status={'Running'} onBtnClick={this.handleClick}/>
        <Column nameColumn={'Evaluating'} status={'Evaluating'} onBtnClick={this.handleClick}/>
        <Column nameColumn={'Live'} status={'completed'} onBtnClick={this.handleClick}/>
      </div>
    )
  }
}
