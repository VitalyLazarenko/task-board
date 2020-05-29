import {Action, ICard} from '../../interfaces';
import {actionTypes} from './actionTypes';

export class ActionCreators {
  static switchLoadingSpinnerActionCreator(status: boolean): Action {
    return {type: actionTypes.UI_LOADING, status};
  }

  static initCardsActionCreator(cards: ICard[]): Action {
    console.log(4);
    return {type: actionTypes.INIT_CARDS, cards};
  }

  static createCardActionCreator(id: string, data: ICard): Action {
    return {type: actionTypes.CREATE_CARD, id, data};
  }

  static selectCardActionCreator(id: string): Action {
    return {type: actionTypes.SELECT_CARD, id};
  }

  static deselectCardActionCreator(): Action {
    return {type: actionTypes.SELECT_CARD};
  }

  static updateCardActionCreator(card: ICard): Action {
    return {type: actionTypes.UPDATE_CARD, card};
  }

  static moveCardActionCreator(id: string, status: string): Action {
    return {type: actionTypes.MOVE_CARD, id, status};
  }

  static searchCardsActionCreator(searchQuery: string, enable: boolean): Action {
    return {type: actionTypes.SEARCH_CARDS, searchQuery, enable};
  }
}
