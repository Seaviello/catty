import {ThemeActionTypes} from '../actions/themeActionTypes';

const DEFAULT_COLOR = '#90caf9';

const initialState = {
  appBackgroundColor: DEFAULT_COLOR,
};

const reducer = (state = initialState, action: ThemeActionTypes) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {...state, appBackgroundColor: action.payload.color};
    case 'RESET_COLOR':
      return {...state, appBackgroundColor: DEFAULT_COLOR};
    default:
      return state;
  }
};

export default reducer;
