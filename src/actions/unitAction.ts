import {
  GET_ALL_UNITS_ERROR,
  GET_ALL_UNITS_SUCCESS,
  GET_ALL_UNITS_START,
  GET_FILTERED_UNITS_ERROR,
  GET_FILTERED_UNITS_SUCCESS,
  GET_FILTERED_UNITS_START,
  UnitActionTypes,
} from './types';
import { IUnit } from '../utils/interfaces';

export function getAllUnitsStart(): UnitActionTypes {
  return {
    type: GET_ALL_UNITS_START,
  };
}

export function getAllUnitsSuccess(units: IUnit[]): UnitActionTypes {
  return {
    type: GET_ALL_UNITS_SUCCESS,
    payload: units,
  };
}

export function getAllUnitsError(error: string): UnitActionTypes {
  return {
    type: GET_ALL_UNITS_ERROR,
    payload: error,
  };
}

export function getFilteredUnitsStart(
  age: string,
  wood: number[],
  food: number[],
  gold: number[]
): UnitActionTypes {
  return {
    type: GET_FILTERED_UNITS_START,
    payload: {
      age: age,
      wood: wood,
      food: food,
      gold: gold,
    },
  };
}

export function getFilteredUnitsSuccess(units: IUnit[]): UnitActionTypes {
  return {
    type: GET_FILTERED_UNITS_SUCCESS,
    payload: units,
  };
}

export function getFilteredUnitsError(error: string): UnitActionTypes {
  return {
    type: GET_FILTERED_UNITS_ERROR,
    payload: error,
  };
}
