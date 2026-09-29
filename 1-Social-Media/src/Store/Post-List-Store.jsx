import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi, Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass the exam",
    body: "After enjoying 4 years of B.Tech, we will be passing out.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type ==="DELETE_POST"){
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId)
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
     type:"DELETE_POST",
     payload:{
      postId,
     },
    });
   };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;

