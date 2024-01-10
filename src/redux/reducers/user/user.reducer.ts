import {createReducer} from "reduxsauce";

import {userTypes} from "../../actions/user/user.action";
import initialStates from "../../initial-states";
import {resetStatesTypes} from "../../actions/reset-states/reset-states.action";

export const INITIAL_STATE = initialStates.user;

const setUser = (state: IUserStates, {user}: IUserActionParams) => {
  return {
    ...state,
    username: user?.email?.split("@")[0],
    email: user.email,
    uid: user.uid,
  };
};

const resetStates = () => INITIAL_STATE;
export const HANDLERS = {
  [userTypes.SET_USER]: setUser,
  [resetStatesTypes.RESET_ALL_STATES]: resetStates,
};

export default createReducer(INITIAL_STATE, HANDLERS);
