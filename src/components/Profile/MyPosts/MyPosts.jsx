import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    console.log(newPostElement.current.value);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} className={s.textarea}></textarea>
        </div>
        <div>
          <button onClick={addPost} className={s.btn}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
