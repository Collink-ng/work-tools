import React, { Children, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { new_ip_state} from '../../../../../../redux_features/fwbQuerySlice';

export default function TemporaryDrawer(props) {
  const dispatch = useDispatch()  
  const sidebarClose =() => dispatch(new_ip_state(false))
  return (
    <div>
        <React.Fragment key={'right'}>     
          <Drawer anchor="right" open={useSelector(new_ip_state).payload.query_subscriber.new_ip} onClose={sidebarClose} >
           {props.children}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
