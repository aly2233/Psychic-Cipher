import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './session_errors_reducer';
import modal from './modal_reducer';
import cards from './cards_reducer';


const RootReducer = combineReducers({
  session,
  errors,
  modal,
  cards
});

export default RootReducer;