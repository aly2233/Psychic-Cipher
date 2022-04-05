import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './session_errors_reducer'
import modal from './modal_reducer'
import posts from './posts_reducer'
import errors from './session_errors_reducer';
import modal from './modal_reducer';
import cards from './cards_reducer';


const RootReducer = combineReducers({
  session,
  errors,
  posts,
  modal,
  cards
});

export default RootReducer;