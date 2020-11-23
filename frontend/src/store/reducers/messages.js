import {REMOVE_MESSAGES,LOAD_MESSAGES} from "../actionsTypes";

export default (state=[],action) => {
    switch(action.type){
        case LOAD_MESSAGES:
            return [...action.messages];
        default:
            return state;
    }
}