import {ICard} from "../interfaces";

const apiBaseURL = '';

export class CardService {
  static getAll(): Promise<ICard[]> {
    return fetch(`${apiBaseURL}/cards/`).then((response) => response.json());
  }

  static get(id: number): Promise<ICard> {
    return fetch(`${apiBaseURL}/cards/${id}`).then((response) =>
      response.json(),
    );
  }

  static create(data: ICard): Promise<ICard> {
    return fetch(`${apiBaseURL}/cards/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  static update(data: ICard): Promise<ICard> {
    return fetch(`${apiBaseURL}/cards/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  static move(id: string, status: string) {
    return fetch(`${apiBaseURL}/cards/${id}`, {
      method: 'PUT',
      body: status,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }
}
