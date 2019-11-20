import {RESET_COLOR, SET_COLOR} from './themeActionTypes';

/* Functionally these two actions could be merged to one: setColor with and without argument */
export const setColor = (color: string) => ({
  type: SET_COLOR,
  payload: {
    color,
  },
});

export const resetColor = () => ({
  type: RESET_COLOR,
});
