import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from '../types';

export const firebaseReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true};
    case ADD_NOTE:
      return {...state, notes: [...state.notes, action.payload]};
    case FETCH_NOTES:
      return {
        ...state,
        notes: action.payload, loading: false
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    default:
      return state;
  }
};
