import { combineReducers } from 'redux';
import { CounterReducer } from './CounterReducer';
import { myReducer } from './Reducer';

export const Rootreducer = combineReducers({
   counter: CounterReducer,
   todo: myReducer
});