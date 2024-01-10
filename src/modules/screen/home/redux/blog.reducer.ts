import {createReducer} from "reduxsauce";
import initialStates from "../../../../redux/initial-states";
import {blogsTypes} from "./blog.actions";
import {resetStatesTypes} from "../../../../redux/actions/reset-states/reset-states.action";

export const INITIAL_STATE = initialStates.blogs;
const fetchBlogsSuccess = (state: IBlogStates, {info}: IBlogInfo) => {
  return {
    ...state,
    blogs: info,
    allBlogs: info,
  };
};

const createBlogSuccess = (state: IBlogStates, {info}: ICreateBlogInfo) => {
  const updatedRecords = [...state.allBlogs, info];
  return {
    ...state,
    blogs: updatedRecords,
    allBlogs: updatedRecords,
    slectedCategory: "All",
  };
};

const updateBlogSuccess = (state: IBlogStates, {info}: ICreateBlogInfo) => {
  const updatedRecords = state.allBlogs?.map((item) => {
    if (item?.id == info?.id) {
      return {...item, ...info};
    }
    return item;
  });
  return {
    ...state,
    blogs: updatedRecords,
    allBlogs: updatedRecords,
    slectedCategory: "All",
  };
};

const deleteBlogSuccess = (state: IBlogStates, {info}: IDeleteBlogInfo) => {
  const updatedRecords = state.allBlogs.filter(
    (item: IBlog) => item?.id !== info
  );
  return {
    ...state,
    blogs: updatedRecords,
    allBlogs: updatedRecords,
    slectedCategory: "All",
  };
};

const filterBlogs = (state: IBlogStates, {info}: IDeleteBlogInfo) => {
  return {
    ...state,
    blogs:
      info === "All"
        ? state.allBlogs
        : state.allBlogs.filter((item: IBlog) => item?.category === info),
    slectedCategory: info,
  };
};

const resetStates = () => INITIAL_STATE;
export const HANDLERS = {
  [blogsTypes.FETCH_BLOGS_SUCCESS]: fetchBlogsSuccess,
  [blogsTypes.CREATE_BLOG_SUCCESS]: createBlogSuccess,
  [blogsTypes.UPDATE_BLOG_SUCCESS]: updateBlogSuccess,
  [blogsTypes.DELETE_BLOG_SUCCESS]: deleteBlogSuccess,
  [blogsTypes.FILTER_BLOGS]: filterBlogs,
  [resetStatesTypes.RESET_ALL_STATES]: resetStates,
};
export default createReducer(INITIAL_STATE, HANDLERS);
