import testReducer from './testReducer'

describe("Test Reducer",() => {

   it("Should return default state,empty object", () => {
      const newState = testReducer(undefined,() => {});
      expect(newState).toEqual({});
   });
   it("Should return array with post",() => {
       const posts = [{post1: "Post1"},{post2:"Post2"}];
       const newState = testReducer(undefined,{type: 'SUCCESS', payload: posts});

       expect(newState).toEqual(posts);
   });
});