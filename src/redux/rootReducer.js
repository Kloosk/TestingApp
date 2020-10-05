import {combineReducers} from "redux";
import testReducer from "./testReducer/testReducer";

const rootReducer = combineReducers({
    test: testReducer
});

export default rootReducer