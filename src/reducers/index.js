import { combineReducers } from 'redux';
import {
  ADD_PERSON,
  REMOVE_PERSON
} from '../actions';

const INITIAL_STATE = [
  {
    first: 'Stephen',
    last: 'Mayeux',
    title: 'Developer',
    bio: 'He likes coding',
    id: ';lkajdf9875'
  }
]

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [ action.payload, ...state ];
    case REMOVE_PERSON:
      return state.filter(person => person.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  people: peopleReducer
});

export default rootReducer;
