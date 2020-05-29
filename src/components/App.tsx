import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './../store';

import {TopBar} from './TopBar';
import {Board} from "./Board";

import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {getCardsThunk} from "../store/thunks";

/**
 * App
 */
export default function App() {
  useEffect(() => {
    // @ts-ignore
    store.dispatch(getCardsThunk());
  })

  return (
  <Provider store={store}>
    <div>
      <TopBar/>
      <Board popUp={false}/>
    </div>
  </Provider>
  );
}
