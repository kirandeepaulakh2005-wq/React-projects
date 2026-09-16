import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../Store/Post-List-Store'
const PostList = () => {
 const {postList} =useContext(PostListData);
  return (
    <>
    {postList.map((post)=>(
      <post/>
      ))}
    </> 
  );
}

export default PostList;