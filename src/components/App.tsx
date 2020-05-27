import React from 'react';

import './app.css';
import {TopBar} from './TopBar';
import {Column} from './Column';

/**
 * App
 */
export default class App extends React.Component {
  /**
   * Method render
   * @return {string} render app.
   */
  render() {
    return (
      <div>
        <TopBar/>
        <div className="board-container">
          <Column nameColumn={'Backlog'}/>
          <Column nameColumn={'Selected'}/>
          <Column nameColumn={'Running'}/>
          <Column nameColumn={'Evaluating'}/>
          <Column nameColumn={'Live'}/>
        </div>
      </div>
    );
  }
}
