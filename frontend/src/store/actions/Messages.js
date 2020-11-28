import { addError } from "./auth";
import {apiCall} from "../../services/api"
import {REMOVE_MESSAGE, LOAD_MESSAGES,CREATE_MESSAGE} from "../actionsTypes";

export function loadMessages(messages){
    return{
        type:LOAD_MESSAGES,
        messages
    }
}

export function createMessage(text){
    return{
        type:CREATE_MESSAGE,
        text
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
    .catch(err => {});
}