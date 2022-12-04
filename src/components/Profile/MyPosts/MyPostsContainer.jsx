import React from 'react';
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ store }) => {
 
  let state = store.getState();

  const sendPost = () => {
    store.dispatch(addPostActionCreater());
  };

  let postChange = (text) => {
    let action = updateNewPostTextActionCreater(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={postChange}
      sendPost={sendPost}
      posts={state.profilePage.posts}
    />
  );
};

export default MyPostsContainer;
