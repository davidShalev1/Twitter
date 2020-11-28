import { addError } from "./auth";
import {apiCall} from "../../services/api"
import {REMOVE_MESSAGE, LOAD_MESSAGES,CREATE_MESSAGE} from "../actionsTypes";

export function loadMessages(messages){
    return{
        type:LOAD_MESSAGES,
        messages
    }
}

export const remove = id => {
    return{
        type:REMOVE_MESSAGE,
        id
    }
}

export function removeMessage(user_id,message_id) {
    return dispatch => {
        return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
        .then(() => dispatch(remove(message_id)))
        .catch(err => dispatch(addError(err.message)));
    }
}


export function fetchMessages(messages){
    return dispatch =>{
        return apiCall("get","/api/messages")
        .then(res => dispatch(loadMessages(res)))
        .catch(err => dispatch(addError(err.message)));
    }
}

export const postNewMessage = text => (dispatch,getState)=>{
    let {currentUser} = getState();
    let id = currentUser.user.id;
    return apiCall("post",`/api/users/${id}/messages`,{text})
    .then(res =>{})
    .catch(err => dispatch(addError(err.message)));
}

