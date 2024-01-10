import { all } from 'redux-saga/effects';

import { watchBlogs } from '../../modules/screen/home/redux/blog.saga';

export function* rootSaga() {
  yield all([watchBlogs()]);
}
