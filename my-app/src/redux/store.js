import createsagaMiddleware from "redux-saga";
import {createStore, applyMiddleware} from "redux";
import rootSaga from './sagas/usersSaga';
import reducer from './reducers/index';

const sagaMiddleware = createsagaMiddleware();
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);