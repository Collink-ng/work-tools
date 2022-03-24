import React, { Children, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { change_ip_state} from '../../../../../../redux_features/fwbQuerySlice';

export default function TemporaryDrawer(props) {
  const dispatch = useDispatch()
  const sidebarClose =() => dispatch(change_ip_state(false))

  return (
    <div>
        <React.Fragment key={'right'}>     
          <Drawer anchor="right" open={useSelector(change_ip_state).payload.query_subscriber.change_ip} onClose={sidebarClose} >
           {props.children}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
