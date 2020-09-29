import React from "react";
import {findByDataAtribute} from "../../../utils";
import {shallow} from 'enzyme'
import Main from "./index";
import {checkProps} from "../../../utils";

const setUp = (props={}) => {
    const component = shallow(<Main {...props} />);
    return component;
};

describe("Main component",() => {

   describe("checking propTypes",() => {
        const expectedProps = {
            title: "Test",
            txt: "Test test test",
            propsy: [{
              name: "test name",
              age: 12,
              isMen: false
            }]
        };
        const propsErr = checkProps(Main,expectedProps);
        expect(propsErr).toBeUndefined();
   });

   describe("component with props",() => {
       let component;
       beforeEach(() => {
           const props = {
               title: "Testowy tytul",
               desc: "Testowy opis"
           };
           component = setUp(props);
       });


       it("should render without errors",() => {
           const wrapper = findByDataAtribute(component,'out');
           expect(wrapper.length).toBe(1);
       });
   });

    describe("component without props",() => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it("should return 0",() => {
            const wrapper = findByDataAtribute(component,'out');
            expect(wrapper.length).toBe(0);
        });
    });
});