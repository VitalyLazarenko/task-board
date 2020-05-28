import React, {useEffect} from 'react';

import {TopBar} from './TopBar';
import {Board} from "./Board";
import {getCardsThunk} from "../store/thunks";

/**
 * App
 */
export default function App() {
  useEffect(() => {
    getCardsThunk();
  })

  return (
    <div>
      <TopBar/>
      <Board/>
    </div>
  );
}
