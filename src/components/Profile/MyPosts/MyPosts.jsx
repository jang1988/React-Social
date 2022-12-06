import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, updateNewPostText, sendPost, value}) => {
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  const onSendPost = () => {
    sendPost();
    newPostElement.current.value = '';
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            placeholder="NEW POST"
            onChange={onPostChange}
            ref={newPostElement}
            className={s.textarea}value={value}
          />
        </div>
        <div>
          <button onClick={onSendPost} className={s.btn}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
