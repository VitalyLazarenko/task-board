import React,{Component} from "react";

import './board.css';
import {Column} from "../Column";
import {CreateEditCard} from "../CreateEditcard";

export class Board extends Component<any, any>{
  render() {
    let popUp = false;
    return(
      <div className="board-container">
        {popUp && <CreateEditCard/>}
        <Column nameColumn={'Backlog'} status={'Backlog'}/>
        <Column nameColumn={'Selected'} status={'Selected'}/>
        <Column nameColumn={'Running'} status={'Running'}/>
        <Column nameColumn={'Evaluating'} status={'Evaluating'}/>
        <Column nameColumn={'Live'} status={'completed'}/>
      </div>
    )
  }
}
