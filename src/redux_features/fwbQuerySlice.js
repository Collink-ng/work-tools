import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
const initialState = {
    query: {
        "subscriber_data": loadState("subscriber_details"),
        "subscriber_ip": loadState("subscriber_ip"),
        "query_status": false,
        "query_retry": false,
    },
    modal: false,
    change_ip: false,
    new_ip: false
}

export const querySubscriber = createSlice({
    name: 'fwb_query',
    initialState,
    reducers:{
        query: state => {
            
        },
        query_success: (state, action) => {
            saveState("subscriber_details", action.payload)
            saveState("subscriber_ip", action.payload['ip address'])
            state.query = {
                "subscriber_data": action.payload,
                "subscriber_ip": action.payload["ip address"],
                "query_status": true,
                "query_retry": false
            }
        },
        modal_state: (state,action) => {
            state.modal = action.payload
        },
        change_ip_state: (state, action) => {
            
            state.change_ip = action.payload
        },
        new_ip_state: (state, action) => {
            
            state.new_ip = action.payload
        },
        query_error: (state, payload) => {
            state.query.query_retry = false
        },
        add_IP_address:(state, action) => {
            state.query.subscriber_ip = [...action.payload.current, action.payload["new ip"]]
            saveState("subscriber_ip", [...action.payload.current, action.payload["new ip"]])
        },
        delete_IP_address:(state, action) => {
            function checkUnwantedIP(item){
                return item != action.payload.ip
            }
            state.query.subscriber_ip = action.payload.current.filter(checkUnwantedIP)
            saveState("subscriber_ip", state.query.subscriber_ip  )
        }   
    }, 
})

export const {query ,query_success,query_error, 
    add_IP_address, delete_IP_address, modal_state,
    change_ip_state, new_ip_state } = querySubscriber.actions
export default querySubscriber.reducer