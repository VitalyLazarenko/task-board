import React,{Component} from "react";

import './board.css';
import {Column} from "../Column";

export class Board extends Component<any, any>{
  render() {
    return(
      <div className="board-container">
        <Column nameColumn={'Backlog'}/>
        <Column nameColumn={'Selected'}/>
        <Column nameColumn={'Running'}/>
        <Column nameColumn={'Evaluating'}/>
        <Column nameColumn={'Live'}/>
      </div>
    )
  }
}
