import { combineReducers } from 'redux';

import appModeReducer from './app-mode/app-mode.reducer';
import blogReducer from '../../modules/screen/home/redux/blog.reducer';
import loadingReducer from './loading/loading.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  appMode: appModeReducer,
  blogs: blogReducer,
  loading: loadingReducer,
  user: userReducer,
});

export default rootReducer;
