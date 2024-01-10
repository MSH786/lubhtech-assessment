import { call, put, takeEvery } from 'redux-saga/effects';
import { blogsCreators, blogsTypes } from './blog.actions';
import {
  createUserBlog,
  deleteUserBlog,
  getUserBlogs,
  updateUserBlog,
} from '../../../../utilities/helpers/blog';
import { navigationRef } from '../../../../utilities/navigation';

export function* watchBlogs() {
  yield takeEvery(blogsTypes.FETCH_BLOGS, fetchBlogs);
  yield takeEvery(blogsTypes.CREATE_BLOG, createBlog);
  yield takeEvery(blogsTypes.UPDATE_BLOG, updateBlog);
  yield takeEvery(blogsTypes.DELETE_BLOG, deleteBlog);
}

function* fetchBlogs({ params }: { params: string; type: string }): any {
  try {
    const response = yield call(getUserBlogs, params);

    yield put(blogsCreators.fetchBlogsSuccess(response));
  } catch (e) {
    yield put(blogsCreators.fetchBlogsFailure(e));
  }
}

function* createBlog({ params }: { params: IBlog; type: string }): any {
  try {
    const response = yield call(createUserBlog, params);

    if (response) {
      navigationRef.navigate('HomeScreen');
    }
    yield put(blogsCreators.createBlogSuccess(response));
  } catch (e) {
    yield put(blogsCreators.createBlogFailure(e));
  }
}

function* updateBlog({ params }: { params: IBlog; type: string }): any {
  try {
    const response = yield call(updateUserBlog, params?.id, params);

    if (response?.updatedBlog) {
      navigationRef.navigate('HomeScreen');
    }
    yield put(blogsCreators.updateBlogSuccess(response?.updatedBlog));
  } catch (e) {
    yield put(blogsCreators.updateBlogFailure(e));
  }
}

function* deleteBlog({ params }: { params: string; type: string }): any {
  try {
    const response = yield call(deleteUserBlog, params);

    yield put(blogsCreators.deleteBlogSuccess(params));
  } catch (e) {
    yield put(blogsCreators.deleteBlogFailure(e));
  }
}
