import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchBlogs: ['params'],
  fetchBlogsSuccess: ['info'],
  fetchBlogsFailure: ['info'],

  createBlog: ['params'],
  createBlogSuccess: ['info'],
  createBlogFailure: ['info'],

  deleteBlog: ['params'],
  deleteBlogSuccess: ['info'],
  deleteBlogFailure: ['info'],

  updateBlog: ['params'],
  updateBlogSuccess: ['info'],
  updateBlogFailure: ['info'],

  filterBlogs: ['info'],
});

export const blogsTypes = Types;
export const blogsCreators = Creators;
