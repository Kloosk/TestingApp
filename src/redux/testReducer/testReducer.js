const testReducer = (state=[],action) => {
  switch(action.type){
      case 'SUCCESS': {
          return action.payload
      }
      default: return {}
  }
};

export default testReducer;