import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk'
import appReducer from './reducer/index';

export default createStore(appReducer,applyMiddleware(...[thunk]));
