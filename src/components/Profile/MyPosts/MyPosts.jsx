import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ];

  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea}></textarea>
        </div>
        <div>
          <button className={s.btn}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
