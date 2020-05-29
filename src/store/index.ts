import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {reducer} from './reducers'
import {IReducerState} from "../interfaces";

const preloadedState: IReducerState = {
  isLoading: false,
  cards: [],
  selectedCardId: '',
  search: {
    enable: false,
    relevantCardIds: []
  }
};

export default (function configureStore(preloadedState: IReducerState) {
  const middlewareEnhancer = applyMiddleware(thunk);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  return createStore(reducer, preloadedState, composedEnhancers);
})(preloadedState);
