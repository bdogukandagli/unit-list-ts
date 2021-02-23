import { IUnit } from '../utils/interfaces';

export const GET_ALL_UNITS_START = 'GET_ALL_UNITS_START';
export const GET_ALL_UNITS_SUCCESS = 'GET_ALL_UNITS_SUCCESS';
export const GET_ALL_UNITS_ERROR = 'GET_ALL_UNITS_ERROR';
export const GET_FILTERED_UNITS_START = 'GET_FILTERED_UNITS_START';
export const GET_FILTERED_UNITS_SUCCESS = 'GET_FILTERED_UNITS_SUCCESS';
export const GET_FILTERED_UNITS_ERROR = 'GET_FILTERED_UNITS_ERROR';
export const GET_UNIT_START = 'GET_UNIT_START';
export const GET_UNIT_SUCCESS = 'GET_UNIT_SUCCESS';
export const GET_UNIT_ERROR = 'GET_UNIT_ERROR';

export interface GetAllUnitsStart {
  type: typeof GET_ALL_UNITS_START;
}

export interface GetAllUnitsSuccess {
  type: typeof GET_ALL_UNITS_SUCCESS;
  payload: IUnit[];
}

export interface GetAllUnitsError {
  type: typeof GET_ALL_UNITS_ERROR;
  payload: string;
}

export interface GetFilteredUnitsStart {
  type: typeof GET_FILTERED_UNITS_START;
  payload: {
    age: string;
    wood: number[];
    food: number[];
    gold: number[];
  };
}

export interface GetFilteredUnitsSuccess {
  type: typeof GET_FILTERED_UNITS_SUCCESS;
  payload: IUnit[];
}

export interface GetFilteredUnitsError {
  type: typeof GET_FILTERED_UNITS_ERROR;
  payload: string;
}

export interface GetUnitStart {
  type: typeof GET_UNIT_START;
  payload: number;
}

export interface GetUnitSuccess {
  type: typeof GET_UNIT_SUCCESS;
  payload: IUnit;
}

export interface GetUnitError {
  type: typeof GET_UNIT_ERROR;
  payload: string;
}

export interface UnitState {
  units: IUnit[];
  isLoading: boolean;
  error: string;
}

export type UnitActionTypes =
  | GetAllUnitsStart
  | GetAllUnitsSuccess
  | GetAllUnitsError
  | GetFilteredUnitsError
  | GetFilteredUnitsStart
  | GetFilteredUnitsSuccess
  | GetUnitStart
  | GetUnitSuccess
  | GetUnitError;
