import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profilePage, addPost, updateNewPostText}) => {
  return (
    <div className={s.ProfileWrapper}>
      <ProfileInfo />
      <MyPosts posts={profilePage.posts} addPost={addPost} newPostText={profilePage.newPostText} updateNewPostText={updateNewPostText} />
    </div>
  );
};

export default Profile;
