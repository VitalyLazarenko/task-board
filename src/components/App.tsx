import React, {Component} from 'react';

import {TopBar} from './TopBar';
import {Board} from "./Board";
import {CreateEditCard} from "./CreateEditcard";

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
