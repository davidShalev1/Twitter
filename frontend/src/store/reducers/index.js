import {combineReducers} from "redux";
import errors from "./errors";
import messages from "./messages";
import currentUser from "./currentUser";

const rootReducer = combineReducers({
    errors,
    currentUser,
    messages
});

export default rootReducer;