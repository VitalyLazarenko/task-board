import {ActionCreators} from "../actions";
import {Action, ICard} from "../../interfaces";
import {CardService} from "../../api";

export function getCardsThunk() {
  console.log(1)
  return (dispatch: (action: Action) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    CardService.getAll().then((cards: ICard[]) => {
      dispatch(ActionCreators.initCardsActionCreator(cards));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function createCardThunk(data: ICard) {
  return (dispatch: (action: Action) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    CardService.create(data).then((id: string) => {
      dispatch(ActionCreators.createCardActionCreator(id, data));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function updateCardThunk(id: string, data: ICard) {
  return (dispatch: (action: Action) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    CardService.update(id, data).then((card: ICard) => {
      dispatch(ActionCreators.updateCardActionCreator(card));
      dispatch(ActionCreators.deselectCardActionCreator());
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}

export function moveCardThunk(id: string, status: string) {
  return (dispatch: (action: Action) => void) => {
    dispatch(ActionCreators.switchLoadingSpinnerActionCreator(true));
    CardService.move(id, status).then(() => {
      dispatch(ActionCreators.moveCardActionCreator(id, status));
      dispatch(ActionCreators.switchLoadingSpinnerActionCreator(false));
    });
  };
}
