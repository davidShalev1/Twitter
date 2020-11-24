import { addError } from "./auth";
import {apiCall} from "../../services/api"
import {REMOVE_MESSAGE, LOAD_MESSAGES} from "../actionsTypes";

export function loadMessages(messages){
    return{
        type:LOAD_MESSAGES,
        messages
    }
}
export function fetchMessages(messages){
    return dispatch =>{
        return apiCall("get","/api/messages")
        .then(res => dispatch(loadMessages(res)))
        .catch(err => dispatch(addError(err.message)));
    }

}