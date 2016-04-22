import { combineReducers } from 'redux';
import positions from './positionsReducer';
import moves from './movesReducer';
import timer from './timerReducer';

export default combineReducers({
  positions,
  moves,
  timer
});
