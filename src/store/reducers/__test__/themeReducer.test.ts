import reducer, {DEFAULT_COLOR} from '../themeReducer';
import {
  RESET_COLOR,
  SET_COLOR,
  ThemeActionTypes,
} from '../../actions/themeActionTypes';

describe('themeReducer', () => {
  const initialState = reducer(undefined, {} as ThemeActionTypes);
  it('initial state should be properly initialized ', () => {
    expect(initialState).toEqual({
      appBackgroundColor: DEFAULT_COLOR,
    });
  });
  it('should handle setColor action', () => {
    const state = reducer(initialState, {
      type: SET_COLOR,
      payload: {color: 'red'},
    });
    expect(state).toMatchSnapshot();
  });
  it('should handle resetColor action', () => {
    const state = reducer(
      {...initialState, appBackgroundColor: 'red'},
      {type: RESET_COLOR},
    );
    expect(state).toMatchSnapshot();
  });
});
