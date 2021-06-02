/* eslint-disable import/no-anonymous-default-export */
import shortid from 'shortid';
import types from './contacts-types';

export const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: types.Delete,
  payload: contactId,
});

export const changeFilter = value => ({
  type: types.Filter,
  payload: value,
});
