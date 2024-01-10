interface ICreateBlogInfo {
  info: IBlog;
  types: string;
}
interface IDeleteBlogInfo {
  info: string;
  types: string;
}

interface IBlogInfo {
  info: IBlog[];
  types: string;
}
