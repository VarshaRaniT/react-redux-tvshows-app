import React from 'react';
import { shallow } from 'enzyme';
import InputComponent from './input';
let rest: any;

describe('InputComponent', () => {

  it('renders the InputComponent', () => {
    const component = shallow(<InputComponent {...rest}></InputComponent>);
    const wrapper= component.find('.input__wrap');
    expect(wrapper.length).toBe(1)
  });
});