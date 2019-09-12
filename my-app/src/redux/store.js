import createsagaMiddleware from "redux-saga";
import {createStore, applyMiddleware, compose} from "redux";
import rootSaga from './sagas/index';
import reducer from './reducers/index';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const sagaMiddleware = createsagaMiddleware();
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
export const store = createStore(
    reducer,
    enhancer,

);

sagaMiddleware.run(rootSaga);