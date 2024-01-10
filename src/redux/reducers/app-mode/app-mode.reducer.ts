import {createReducer} from "reduxsauce";

import {appModeTypes} from "../../actions/app-mode/app-mode.action";
import initialStates from "../../initial-states";

export const INITIAL_STATE = initialStates.appMode;

const setAppMode = (state: IAppModeStates, {mode}: IAppModeActionParams) => {
  return {
    ...state,
    appMode: mode,
  };
};

export const HANDLERS = {
  [appModeTypes.SET_APP_MODE]: setAppMode,
};

export default createReducer(INITIAL_STATE, HANDLERS);
