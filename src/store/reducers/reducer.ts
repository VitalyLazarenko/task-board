import {Action, ICard, IReducerState, ITag} from "../../interfaces";
import {actionTypes} from "../actions";
import {Reducer} from "redux";

// @ts-ignore
export const reducer: Reducer<IReducerState, Action> = (state: IReducerState, action: Action): IReducerState => {
  switch (action.type) {

    case actionTypes.UI_LOADING: {
      return {...state, isLoading: action.status};
    }

    case actionTypes.CREATE_CARD: {
      return {...state, cards: [...state.cards, {...action.data, id: action.id}]}
    }

    case actionTypes.INIT_CARDS: {
      return {...state, cards: action.cards};
    }

    case actionTypes.SELECT_CARD: {
      return {...state, selectedCardId: action.id};
    }

    case actionTypes.DESELECT_CARD: {
      return {...state, selectedCardId: ''};
    }

    case actionTypes.UPDATE_CARD: {
      let cards: ICard[] = state.cards.map((card: ICard) => {
        if (card.id === action.card.id) {
          return {...action.card};
        }
        return card;
      });
      return {...state, cards};
    }

    case actionTypes.MOVE_CARD: {
      let cards: ICard[] = state.cards.map((card: ICard) => {
        if (card.id === action.id) {
          return {...card, status: action.status};
        }
        return card;
      });
      return {...state, cards};
    }

    case actionTypes.SEARCH_CARDS: {
      let cards: ICard[] = state.cards.filter((card: ICard) => {
        return card.title.toLowerCase().includes(action.searchQuery.toLowerCase())
          || card.description.toLowerCase().includes(action.searchQuery.toLowerCase())
          || card.tags.some((tag: ITag) => tag.title.toLowerCase().includes(action.searchQuery.toLowerCase()));
      });
      return {
        ...state,
        search: {
          enable: action.enable,
          relevantCardIds: cards.map((card: ICard) => card.id)
        }
      };
    }

    default :
      return state;
  }
}
