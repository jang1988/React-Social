import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        name: 'Max',
        photoUrl:
          'https://s0.rbk.ru/v6_top_pics/media/img/5/10/756522576599105.jpg',
        followed: false,
        status: 'I am a BOSS',
        location: { city: 'Dnipro', country: 'Ukraine' },
      },
      {
        id: 2,
        photoUrl:
          'https://cdnn11.img.sputnik.by/img/07e6/0a/01/1067468884_464:0:2511:2047_1920x0_80_0_0_bb8614d0c737c423e4dde4c0507a71ab.jpg',
        name: 'Anna',
        followed: false,
        status: 'I am a BOSS',
        location: { city: 'Lviv', country: 'Ukraine' },
      },
      {
        id: 3,
        photoUrl:
          'https://www.ixbt.com/img/n1/news/2021/5/1/4adf85be7536d688480f1f6485034c527e552662_large_large.jpg',
        name: 'Gleb',
        followed: true,
        status: 'I am a BOSS',
        location: { city: 'Kiev', country: 'Ukraine' },
      },
      {
        id: 4,
        photoUrl:
          'https://s0.rbk.ru/v6_top_pics/media/img/5/10/756522576599105.jpg',
        name: 'Nata',
        followed: true,
        status: 'I am a BOSS',
        location: { city: 'London', country: 'England' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div className="user" key={user.id}>
          <div className="wrapper">
            <div className="user__img">
              <img
                className={s.user__imges}
                src={user.photoUrl}
                alt="user-img"
              />
            </div>
            <div className="user__btn">
              {user.followed ? (
                <button
                  className="btn-followed"
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  FOLLOW
                </button>
              ) : (
                <button
                  className="btn-followed"
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  UNFOLLOW
                </button>
              )}
            </div>
          </div>
          <div className="inner">
            <div className="user__info">
              <div className="user__name">{user.name}</div>
              <div className="user__status">{user.status}</div>
            </div>
            <div className="user__location">
              <div className="user__country">{user.location.country}</div>
              <div className="user__city">{user.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
