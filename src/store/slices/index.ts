import {combineReducers} from 'redux';
import onBoardingReducer from './onBoardingSlice';

const rootReducer = combineReducers({
  onBoarding: onBoardingReducer,
});

export default rootReducer;
