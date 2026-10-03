import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList,addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetaching] =  useState(false);

  useEffect(() =>{
    setFetaching(true);

    const controller = new AbortController();
    const signal = controller.signal;

  fetch('https://dummyjson.com/posts',{signal})
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
      setFetaching(false);
    });
    return () =>{
      controller.abort();
    }
  },[]); 

  return (
    <>
    {fetching && <LoadingSpinner/>}
    {!fetching &&
      postList.length===0 && <WelcomeMessage />
    }
      {!fetching &&postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;

