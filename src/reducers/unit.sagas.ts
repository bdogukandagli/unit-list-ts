import {
  all,
  AllEffect,
  fork,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
import { unitData } from '../data/data';
import {
  GET_ALL_UNITS_START,
  UnitActionTypes,
  GET_FILTERED_UNITS_START,
  GetFilteredUnitsStart,
} from '../actions/types';
import {
  getAllUnitsSuccess,
  getAllUnitsError,
  getFilteredUnitsSuccess,
  getFilteredUnitsError,
} from '../actions/unitAction';

export function* handleFetchAll(): Generator<PutEffect<UnitActionTypes>> {
  try {
    yield put(getAllUnitsSuccess(unitData));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getAllUnitsError(err.stack));
    } else {
      yield put(getAllUnitsError('Network Error.'));
    }
  }
}

function* watchGetAllRequest() {
  yield takeLatest(GET_ALL_UNITS_START, handleFetchAll);
}

export function* handleFetchFiltered(
  action: GetFilteredUnitsStart
): Generator<PutEffect<UnitActionTypes>> {
  try {
    let data = unitData;

    const age = action.payload.age;
    const food = action.payload.food;
    const gold = action.payload.gold;
    const wood = action.payload.wood;

    if (food[0] !== 0 || food[1] !== 200) {
      data = data.filter(function (item) {
        return (
          item.cost?.Food && food[0] <= item.cost?.Food && item.cost?.Food <= food[1]
        );
      });
    }

    if (wood[0] !== 0 || wood[1] !== 200) {
      data = data.filter(function (item) {
        return (
          item.cost?.Wood && wood[0] <= item.cost?.Wood && item.cost?.Wood <= wood[1]
        );
      });
    }

    if (gold[0] !== 0 || gold[1] !== 200) {
      data = data.filter(function (item) {
        return (
          item.cost?.Gold && gold[0] <= item.cost?.Gold && item.cost?.Gold <= gold[1]
        );
      });
    }

    if (age !== 'All') {
      data = data.filter((item) => {
        return item.age == age;
      });
    }

    yield put(getFilteredUnitsSuccess(data));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getFilteredUnitsError(err.stack));
    } else {
      yield put(getFilteredUnitsError('Network Error.'));
    }
  }
}

function* watchGetFilteredRequest() {
  yield throttle(500, GET_FILTERED_UNITS_START, handleFetchFiltered);
}

function* unitSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchGetAllRequest), fork(watchGetFilteredRequest)]);
}

export default unitSaga;
