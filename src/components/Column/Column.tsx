import React,{Component} from "react";

import './column.css';
import {Card} from "../Card";

export class Column extends Component<any, any>{
  createClassName(column: any) {
    let className = 'column-container';
    switch (column) {
      case 'Selected':
        return  className += ' selected';
      case 'Running' :
        return className += ' running';
      case 'Evaluating':
        return className += ' evaluating';
      case 'Live':
        return className += ' live';
      default:
        return className;
    }
  }
  render() {
      let {nameColumn, status, onBtnClick} = this.props;
        return(
            <div className={this.createClassName(nameColumn)}>
                <div className="column-header">
                    <label>{this.props.nameColumn}</label>
                    <label>9</label>
                </div>
                <Card status={status} onBtnClick={onBtnClick}/>
                <Card status={status} onBtnClick={onBtnClick}/>
                <Card status={status} onBtnClick={onBtnClick}/>
                <Card status={status} onBtnClick={onBtnClick}/>

              <div id="AddCard"
                   className="btn-addCard column"
                   onClick={onBtnClick}
              >+</div>
            </div>
        )
    }
}
