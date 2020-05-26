import React from 'react';
import Card from './Card';
import CreateEditCard from './CreateEditcard';
import {TopBar} from './TopBar';
import Column from './Column';

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
        <CreateEditCard/>
        <Column/>
        <Card/>
      </div>
    );
  }
}
