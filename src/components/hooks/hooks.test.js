import React from "react";
import Hooks from "./Hooks";
import customHook from "./customHook";
import {mount} from 'enzyme'

describe('Testing hooks',() => {
    let onCountChange;
    let wrapper;
    beforeEach(() => {
        onCountChange = jest.fn();
        wrapper = mount(<Hooks onCountChange={onCountChange}/>);
    });
   it('works',() => {
      expect(2+2).toEqual(4);
   });
   it('renders',() => {
       expect(wrapper).not.toBeNull();
   });
   it('default p text',() => {
      expect(wrapper.find('p').text()).toEqual('Count: 0');
   });
   it('increment by 1',() => {
       wrapper.find('button').simulate('click');
       expect(wrapper.find('p').text()).toEqual('Count: 1');
   });
    it('should render in every state change of count',() => {
        expect(onCountChange).toBeCalledTimes(1);
        wrapper.find('button').simulate('click');
        expect(onCountChange).toBeCalledTimes(2);
    });
});
describe.only('useCustomHook',() => {
   it('works',() =>{
       let results;
       function Wrapper(){
         results = customHook();
         return null;
       }
       mount(<Wrapper/>);
       expect(results.count).toEqual(0);
   });
});