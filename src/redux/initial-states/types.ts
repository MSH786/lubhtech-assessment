interface IAppModeStates {
  appMode: string;
}
interface IBlogStates {
  blogs: IBlog[];
  allBlogs: IBlog[];
  slectedCategory: string;
}
interface ILoadingStates {
  isFetchingBlogs: boolean;
  isCreatingBlog: boolean;
}

interface IInitialStates {
  appMode: IAppModeStates;
  blogs: IBlogStates;
  loading: ILoadingStates;
  user: IUserStates;
}

interface IAppModeActionParams {
  mode: string;
}

interface IUserStates {
  username: string;
  email: string;
  uid: string;
}

interface IUserActionParams {
  user: IUserStates;
}
