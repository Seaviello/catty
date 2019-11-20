export const RESET_COLOR = 'RESET_COLOR';
export const SET_COLOR = 'SET_COLOR';

interface SetColorAction {
  type: typeof SET_COLOR;
  payload: {
    color: string;
  };
}

interface ResetColorAction {
  type: typeof RESET_COLOR;
}

export type ThemeActionTypes = SetColorAction | ResetColorAction;
