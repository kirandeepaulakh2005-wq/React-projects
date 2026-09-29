import React, { useContext, useRef } from 'react';
import { PostListContext } from '../Store/Post-List-Store';

const CreatePost = () => {

 const {addPost}=useContext(PostListContext); 

  const userId=useRef();
  const postTitle=useRef();
  const postBody=useRef();
  const reactions=useRef();
  const tags=useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>

      <div className="mb-3">
    <label htmlFor="userId" className="form-label">
      Enter your UserId here
      </label>
    <input 
    type="text" 
    ref={userId}
    className="form-control" 
    id="userId"
    placeholder='Your User Id' /> 
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Post Title
      </label>
    <input 
    type="text" 
    ref={postTitle}
    className="form-control" 
    id="title"
    placeholder='how are you feeling today ...' /> 
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">
      Post Content
      </label>
    <textarea
    rows="4"
    type="text" 
    ref={postBody}
    className="form-control" 
    id="body"
    placeholder='Tell us more about it' /> 
  </div>
  
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">
    Number of reactions 
      </label>
    <input 
    type="text" 
    ref={reactions}
    className="form-control" 
    id="reactions"
    placeholder='How many people reacted to this post.' /> 
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">
      Enter your hashtags here
      </label>
    <input 
    type="text" 
    ref={tags}
    className="form-control" 
    id="tags"
    placeholder='Please enter tags using space' /> 
  </div>

  <button type="submit" className="btn btn-primary">
    post
    </button>
</form>
  );
}

export default CreatePost;