import React,{Component} from "react";

import './board.css';
import {Column} from "../Column";

export class Board extends Component<any, any>{
  render() {
    return(
      <div className="board-container">
        <Column nameColumn={'Backlog'} status={'Backlog'}/>
        <Column nameColumn={'Selected'} status={'Selected'}/>
        <Column nameColumn={'Running'} status={'Running'}/>
        <Column nameColumn={'Evaluating'} status={'Evaluating'}/>
        <Column nameColumn={'Live'} status={'completed'}/>
      </div>
    )
  }
}
