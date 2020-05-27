import {ITag} from "./ITag";

export interface ICard {
  id: string;
  title: string;
  description: string;
  tags: ITag[];
  status: string;
}
