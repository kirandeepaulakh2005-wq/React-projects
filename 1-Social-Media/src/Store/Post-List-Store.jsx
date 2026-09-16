import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:() =>{},
    deletPost: () =>{},
});

const postListReducer = (currentPostlist,action) =>{
    return currentPostlist;
}

const postListprovider =({children}) =>{
const[postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);


const addPost=() =>{

};
const deletePost = () =>{

};

    return (
         <PostList.Provider value={{ postList,addPost,deletePost}}>
     {children}
    </PostList.Provider>
    );
};

const DEFAULT_POST_LIST =[{
id:'1',
title:' Going to Mumbai',
body:'Hi,Friends,I am going to Mumbai for my vacations.Hope to enjoy a lot.peace out.',
reactions:2,
userId:'user-9',
tags :['vacation','Mumbai','Enjoying']
},
{
id:'2',
title:'Pass the exam',
body:'After enjoying 4 years of B.tech, we will passing out ',
reactions:15,
userId:'user-12',
tags :['Graduating','Unbelievable']
}];

export default postListprovider;