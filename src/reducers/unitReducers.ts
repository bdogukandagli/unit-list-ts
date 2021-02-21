import {
  GET_ALL_UNITS_ERROR,
  GET_ALL_UNITS_SUCCESS,
  GET_ALL_UNITS_START,
  GET_FILTERED_UNITS_ERROR,
  GET_FILTERED_UNITS_SUCCESS,
  GET_FILTERED_UNITS_START,
  UnitActionTypes,
  UnitState,
} from '../actions/types';

const initialState: UnitState = {
  units: [],
  isLoading: false,
  error: '',
};

export function unitReducer(state = initialState, action: UnitActionTypes): UnitState {
  switch (action.type) {
    case GET_ALL_UNITS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_UNITS_SUCCESS:
      return {
        ...state,
        units: [...state.units, ...action.payload],
        isLoading: false,
      };
    case GET_ALL_UNITS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_FILTERED_UNITS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FILTERED_UNITS_SUCCESS:
      return {
        ...state,
        units: [...action.payload],
        isLoading: false,
      };
    case GET_FILTERED_UNITS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
