import {checkPropTypes} from "prop-types";
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/redux/rootReducer';
import thunk from "redux-thunk";


export const findByDataAtribute = (component,attr) => {
    return component.find(`[data-test='${attr}']`);
};
export const checkProps = (component,expectedProps) => {
  return checkPropTypes(component.propTypes,expectedProps,'props',component.name);
};
export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};