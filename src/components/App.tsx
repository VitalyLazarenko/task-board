import React, {Component} from 'react';

import {TopBar} from './TopBar';
import {Board} from "./Board";

/**
 * App
 */
export default class App extends Component {
  /**
   * Method render
   * @return {string} render app.
   */
  render() {
    return (
      <div>
        <TopBar/>
        <Board/>
      </div>
    );
  }
}
