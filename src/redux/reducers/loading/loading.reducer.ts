import {createReducer} from "reduxsauce";

import initialStates from "../../initial-states";
import {blogsTypes} from "../../../modules/screen/home/redux/blog.actions";
import {resetStatesTypes} from "../../actions/reset-states/reset-states.action";

export const INITIAL_STATE = initialStates.loading;

// fetching blogs
const fetchingBlogsStart = (state: ILoadingStates) => ({
  ...state,
  isFetchingBlogs: true,
});

const fetchingBlogsEnd = (state: ILoadingStates) => ({
  ...state,
  isFetchingBlogs: false,
});

// creating blog
const creatingBlogStart = (state: ILoadingStates) => ({
  ...state,
  isCreatingBlog: true,
});

const creatingBlogEnd = (state: ILoadingStates) => ({
  ...state,
  isCreatingBlog: false,
});

const resetStates = () => INITIAL_STATE;
export const HANDLERS = {
  [blogsTypes.FETCH_BLOGS]: fetchingBlogsStart,
  [blogsTypes.FETCH_BLOGS_SUCCESS]: fetchingBlogsEnd,
  [blogsTypes.FETCH_BLOGS_FAILURE]: fetchingBlogsEnd,

  [blogsTypes.CREATE_BLOG]: creatingBlogStart,
  [blogsTypes.CREATE_BLOG_SUCCESS]: creatingBlogEnd,
  [blogsTypes.CREATE_BLOG_FAILURE]: creatingBlogEnd,

  [blogsTypes.UPDATE_BLOG]: creatingBlogStart,
  [blogsTypes.UPDATE_BLOG_SUCCESS]: creatingBlogEnd,
  [blogsTypes.UPDATE_BLOG_FAILURE]: creatingBlogEnd,

  [resetStatesTypes.RESET_ALL_STATES]: resetStates,
};

export default createReducer(INITIAL_STATE, HANDLERS);
