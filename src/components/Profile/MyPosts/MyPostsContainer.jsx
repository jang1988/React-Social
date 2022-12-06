import { connect } from 'react-redux';
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    value: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreater(text);
      dispatch(action);
    },
    sendPost: () => {
      dispatch(addPostActionCreater());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
