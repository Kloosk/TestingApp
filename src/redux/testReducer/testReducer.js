import {ADDV} from "./testTypes";

const initialState = {};

const testReducer = (state=initialState,action) => {
  switch(action.type){
      case ADDV: {
          return action.payload
      }
      default: return {}
  }
};

export default testReducer;