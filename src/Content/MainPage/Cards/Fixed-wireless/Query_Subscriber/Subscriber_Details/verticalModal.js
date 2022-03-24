import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { add_IP_address, modal_state} from '../../../../../../redux_features/fwbQuerySlice';
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


export default function TransitionsModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => dispatch(modal_state(false))

  const modalState = useSelector(state => {
    return state.query_subscriber.modal
  })
  return (
    <div>
     
      <Modal
        className={classes.modal}
        open= {modalState}
        onClose = {handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalState}>
          <div >
           {props.children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
