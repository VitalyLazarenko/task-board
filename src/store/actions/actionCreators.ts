import {Action, ICard} from '../../interfaces';
import {actionTypes} from './actionTypes';

export class ActionCreators {
  static switchLoadingSpinnerActionCreator(status: boolean): Action {
    return {type: actionTypes.UI_LOADING, status};
  }

  static initCardsActionCreator(cards: ICard[]): Action {
    return {type: actionTypes.INIT_CARDS, cards};
  }

  static createCardActionCreator(card: ICard): Action {
    return {type: actionTypes.CREATE_CARD, card};
  }

  static selectCardActionCreator(id: string): Action {
    return {type: actionTypes.SELECT_CARD, id};
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
