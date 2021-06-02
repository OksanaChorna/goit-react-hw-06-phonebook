import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      //             const hasContacts = state.find({ name } => {
      //     name.toLocaleLowerCase() === payload.name.toLocaleLowerCase()
      // });
      //         if (hasContacts) {
      //             alert(`${payload.name} is already in contacts`);

      return [...state, payload];

    case types.Delete:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.Filter:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
