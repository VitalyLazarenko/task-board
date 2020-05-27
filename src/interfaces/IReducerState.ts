import {ICard} from "./ICard";

export interface IReducerState {
  isLoading: boolean;
  cards: ICard[];
  search: {
    enable: boolean;
    relevantCardIds: string[];
  }
  selectedCardId: string;
}
