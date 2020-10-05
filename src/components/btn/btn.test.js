import React from "react";
import Btn from "./index";
import {checkProps,findByDataAtribute} from "../../../utils";
import {shallow} from 'enzyme'


const setUp = (props={}) => {
    const component = shallow(<Btn {...props} />);
    return component;
};

describe('Button post',() => {
    describe("check props",() => {
        const expectedProps = {
            func: () => {},
            txt: "Title title"
        };
        it("Should return undefined",() => {
            let newProps = checkProps(Btn,expectedProps);
            expect(newProps).toBeUndefined();
        });
    });
    describe("component with props",() => {
       let component;
       let mockFunc;
       beforeEach(() => {
           mockFunc = jest.fn();
           const props = {
               func: mockFunc,
               txt: "Testowanie"
           };
           component = setUp(props);
       });
       it("Should runs without errors",() => {
          const wrapper = findByDataAtribute(component,'btn');
          expect(wrapper.length).toBe(1);
       });
       it("Should emit callback on click event",() => {
           const wrapper = findByDataAtribute(component,'btn');
           wrapper.simulate('click');
           const cb = mockFunc.mock.calls.length;
           expect(cb).toBe(1);
       });
    });
    describe("compoentn without props",() => {
        let component;
        beforeEach(() => {
            component = setUp({});
        });
        it("Should runs without errors",() => {
            const wrapper = findByDataAtribute(component,'btn');
            expect(wrapper.length).toBe(0);
        });
    });


});