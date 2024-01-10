import {createActions} from "reduxsauce";

const {Types, Creators} = createActions({
  setAppMode: ["mode"],
});

export const appModeTypes = Types;
export const appModeCreators = Creators;
