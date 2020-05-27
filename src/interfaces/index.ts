import {actionTypes} from "../store/actions";

export * from './ICard';
export * from './IReducerState';
export * from './ITag';

export type Action = {type: actionTypes, [key: string]: any};
