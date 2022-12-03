import React from 'react';
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPostsContainer = ({ posts, dispatch }) => {
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  const sendPost = () => {
    dispatch(addPostActionCreater());
    newPostElement.current.value = '';
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreater(text);
    dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
    />
  );
};

export default MyPostsContainer;
