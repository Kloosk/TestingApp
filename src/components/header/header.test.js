import React from 'react'
import {shallow} from 'enzyme'
import Header from "./index";
import {findByDataAtribute} from "../../../utils";

const setUp = () => {
    const component = shallow(<Header/>);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
       component = setUp();
    });

    it('Sholud run withour errors',() => {
        const wrapper = findByDataAtribute(component,'logo')
        expect(wrapper.length).toBe(1);
    });
});


