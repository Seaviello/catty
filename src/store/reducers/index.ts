import {combineReducers} from 'redux';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});
// Exports
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
