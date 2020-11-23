import { apiCall,setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionsTypes";
import {ADD_ERROR,REMOVE_ERROR} from "../actionsTypes";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function addError(error){
    return {
        type:ADD_ERROR,
        error
    }
}

export function removeError(){
    return {
        type:REMOVE_ERROR
    }
}

export function logout(){
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function setAuthorizationToken(token){
    setTokenHeader(token);
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post",`/api/auth/${type}`, userData)
                .then(({ token, ...user }) => {
                    localStorage.setItem("jwt-token", token);
                    setAuthorizationToken(token);
                    dispatch(setCurrentUser(user));
                    dispatch(removeError());
                    resolve();
                }
            )
            .catch(err =>{
                dispatch(addError(err.message));
                reject();
            })
            })
        }
    }
