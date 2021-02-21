import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import unitSaga from './reducers/unit.sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

export default store;

sagaMiddleware.run(unitSaga);
