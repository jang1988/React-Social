import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ profilePage, dispatch, store }) => {
  return (
    <div className={s.ProfileWrapper}>
      <ProfileInfo />
      <MyPostsContainer
        store={store}
      />
    </div>
  );
};

export default Profile;
