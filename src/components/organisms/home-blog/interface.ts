interface IBlog {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  user_id: string;
}
interface IBlogParams extends IBlog {
  blogImage?: string;
}

interface IUpdateResult {
  success: boolean;
  message?: string;
  updatedBlog?: IBlog; // Include the updated blog item
}
