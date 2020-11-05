import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';
let rest: any;
describe('Title', () => {

  it('renders the Button', () => {
    const component = shallow(<Button {...rest}></Button>);
    const wrapper= component.find('.custom__btn__wrap');
    expect(wrapper.length).toBe(1)
  });
});