import { connect } from 'react-redux';
import {
  sendMessageCreater,
  updateNewMessageTextCreater,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreater(text));
    },
    onSendMessage: () => {
      dispatch(sendMessageCreater());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
