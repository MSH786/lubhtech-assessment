import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setUser: ['user'],
});

export const userTypes = Types;
export const userCreators = Creators;
