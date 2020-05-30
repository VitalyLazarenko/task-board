import {ICard} from "../interfaces";
import {db} from '../firebase';

export class CardService {
  static getAll(): Promise<ICard[]> {
    return db.collection("cards")
      .get()
      .then((docs) => {
        const cards: ICard[] = [];
        docs.forEach((card) => {
          // @ts-ignore
          cards.push({id: card.id, ...card.data()});
        });
        return cards;
      });
  }

  static create(data: ICard): Promise<string> {
    return db.collection("cards")
      .add(data)
      .then((res) => res.id);
  }

  static update(id: string, data: ICard): Promise<ICard> {
    delete data.id;
    return db.collection("cards").doc(id)
      .update(data)
      .then(() => ({...data, id}));
  }

  static move(id: string, status: string): Promise<string> {
    return db.collection("cards").doc(id)
      .update({status})
      .then(() => id);
  }
}
