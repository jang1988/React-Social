import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }) => {
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  const sendPost = () => {
    addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text)
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} className={s.textarea} value={newPostText} />
        </div>
        <div>
          <button onClick={sendPost} className={s.btn}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
