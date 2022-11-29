import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, dispatch }) => {
  return (
    <div className={s.ProfileWrapper}>
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
