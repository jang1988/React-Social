const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
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
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: { ...state, users: [...state.users, ...action.users] },
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
