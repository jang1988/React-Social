import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.ProfileInfoWrapper}>
      <img
        src="https://www.thoughtco.com/thmb/EV-FlBpaeZxvg_L3KudHhj_YTZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/JavaScript-58acbb8a3df78c345bad32c2.jpg"
        alt="come text"
      />
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
